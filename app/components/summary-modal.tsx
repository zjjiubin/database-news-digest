"use client";

import { useEffect, useRef, useState } from "react";
import { getCachedSummary, saveCachedSummary } from "../lib/cache";
import { PROMPT_VERSION } from "../lib/constants";
import { generatePaperSummary } from "../lib/llm";
import { extractPdfText } from "../lib/pdf";
import type { LocalSummaryCache, ModelSettings, PaperRecord, UploadFallbackState } from "../types";

type Props = {
  paper: PaperRecord | null;
  settings: ModelSettings;
  onClose: () => void;
};

type ModalState = "idle" | "loading" | "ready" | "needs-settings" | "needs-upload" | "error";

export function SummaryModal({ paper, settings, onClose }: Props) {
  const [state, setState] = useState<ModalState>("idle");
  const [summary, setSummary] = useState<LocalSummaryCache | null>(null);
  const [error, setError] = useState("");
  const [uploadState, setUploadState] = useState<UploadFallbackState | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!paper) {
      setState("idle");
      setSummary(null);
      setError("");
      setUploadState(null);
      return;
    }

    const currentPaper = paper;

    let cancelled = false;

    async function run() {
      if (!settings.baseUrl || !settings.apiKey || !settings.paperSummaryModel) {
        setState("needs-settings");
        return;
      }

      const cached = await getCachedSummary(
        currentPaper.id,
        settings.paperSummaryModel,
        PROMPT_VERSION
      );
      if (cached && !cancelled) {
        setSummary(cached);
        setState("ready");
        return;
      }

      if (!currentPaper.pdf_url) {
        setUploadState({ paper_id: currentPaper.id, pdf_required: true, upload_status: "idle" });
        setState("needs-upload");
        return;
      }

      try {
        setState("loading");
        const response = await fetch(currentPaper.pdf_url);
        if (!response.ok) {
          throw new Error("浏览器无法直接下载 PDF。");
        }
        const pdfText = await extractPdfText(await response.arrayBuffer());
        const generated = await generatePaperSummary(settings, currentPaper, pdfText);
        await saveCachedSummary(generated);
        if (!cancelled) {
          setSummary(generated);
          setState("ready");
        }
      } catch (cause) {
        if (!cancelled) {
          setError(cause instanceof Error ? cause.message : "总结生成失败。");
          setUploadState({
            paper_id: currentPaper.id,
            pdf_required: true,
            upload_status: "failed"
          });
          setState("needs-upload");
        }
      }
    }

    void run();

    return () => {
      cancelled = true;
    };
  }, [paper, settings]);

  if (!paper) {
    return null;
  }

  async function handleUploadedFile(file: File | null) {
    if (!file || !paper) {
      return;
    }

    const currentPaper = paper;

    try {
      setState("loading");
      setUploadState({
        paper_id: currentPaper.id,
        pdf_required: true,
        upload_status: "processing"
      });
      const pdfText = await extractPdfText(file);
      const generated = await generatePaperSummary(settings, currentPaper, pdfText);
      await saveCachedSummary(generated);
      setSummary(generated);
      setState("ready");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "上传 PDF 后生成失败。");
      setUploadState({
        paper_id: currentPaper.id,
        pdf_required: true,
        upload_status: "failed"
      });
      setState("error");
    }
  }

  return (
    <div className="modal-shell" role="dialog" aria-modal="true">
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-card">
        <div className="modal-header">
          <div>
            <p className="eyebrow">{paper.source}</p>
            <h2>{paper.title}</h2>
            <p className="modal-meta">
              {paper.published} · {paper.category_titles.join(" / ")}
            </p>
          </div>
          <button className="ghost-button" type="button" onClick={onClose}>
            关闭
          </button>
        </div>

        {state === "needs-settings" ? (
          <div className="status-card">
            <p>请先在右上角配置模型 Base URL、API Key 和模型名。</p>
          </div>
        ) : null}

        {state === "loading" ? (
          <div className="status-card">
            <p>正在读取 PDF、解析全文并生成总结，请稍等。</p>
          </div>
        ) : null}

        {state === "needs-upload" ? (
          <div className="status-card">
            <p>{error || "当前链接无法直接下载 PDF，请手动上传论文文件。"}</p>
            <div className="upload-actions">
              <button
                className="secondary-button"
                type="button"
                onClick={() => fileInputRef.current?.click()}
              >
                上传 PDF
              </button>
              <a className="ghost-link" href={paper.paper_url} target="_blank" rel="noreferrer">
                打开论文原文
              </a>
            </div>
            <input
              ref={fileInputRef}
              hidden
              accept="application/pdf"
              type="file"
              onChange={(event) => void handleUploadedFile(event.target.files?.[0] ?? null)}
            />
            {uploadState ? <p className="upload-hint">当前状态：{uploadState.upload_status}</p> : null}
          </div>
        ) : null}

        {state === "error" ? (
          <div className="status-card">
            <p>{error || "总结生成失败。"}</p>
          </div>
        ) : null}

        {state === "ready" && summary ? (
          <div className="summary-grid">
            <section>
              <h3>一句话结论</h3>
              <p>{summary.summary_sections.verdict}</p>
            </section>
            <section>
              <h3>这篇论文解决什么问题</h3>
              <p>{summary.summary_sections.problem}</p>
            </section>
            <section>
              <h3>核心方法 / 系统设计</h3>
              <p>{summary.summary_sections.method}</p>
            </section>
            <section>
              <h3>实验与结果</h3>
              <p>{summary.summary_sections.experiments}</p>
            </section>
            <section>
              <h3>对数据库内核的启发</h3>
              <p>{summary.summary_sections.dbImpact}</p>
            </section>
            <section>
              <h3>是否值得精读</h3>
              <p>{summary.summary_sections.readingAdvice}</p>
            </section>
            <section>
              <h3>关键术语</h3>
              <div className="tag-list">
                {summary.summary_sections.keywords.map((keyword) => (
                  <span className="tag" key={keyword}>
                    {keyword}
                  </span>
                ))}
              </div>
            </section>
          </div>
        ) : null}
      </div>
    </div>
  );
}
