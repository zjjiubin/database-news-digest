"use client";

import { useEffect, useRef, useState } from "react";
import {
  getCachedSummary,
  getCachedTermExplanation,
  saveCachedSummary,
  saveCachedTermExplanation
} from "../lib/cache";
import { PROMPT_VERSION, TERM_EXPLANATION_PROMPT_VERSION } from "../lib/constants";
import { generatePaperSummary, generateTermExplanation } from "../lib/llm";
import { requestArrayBuffer } from "../lib/network";
import { extractPdfText } from "../lib/pdf";
import type {
  LocalSummaryCache,
  LocalTermExplanationCache,
  ModelSettings,
  PaperRecord,
  UploadFallbackState
} from "../types";

type Props = {
  paper: PaperRecord | null;
  settings: ModelSettings;
  onSummaryReady?: (paperId: string) => void;
};

type PanelState = "idle" | "loading" | "ready" | "needs-settings" | "needs-upload" | "error";

export function PaperSummaryPanel({ paper, settings, onSummaryReady }: Props) {
  const [state, setState] = useState<PanelState>("idle");
  const [summary, setSummary] = useState<LocalSummaryCache | null>(null);
  const [paperText, setPaperText] = useState("");
  const [error, setError] = useState("");
  const [uploadState, setUploadState] = useState<UploadFallbackState | null>(null);
  const [selectedKeyword, setSelectedKeyword] = useState("");
  const [keywordState, setKeywordState] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [keywordError, setKeywordError] = useState("");
  const [keywordExplanation, setKeywordExplanation] = useState<LocalTermExplanationCache | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!paper) {
      setState("idle");
      setSummary(null);
      setPaperText("");
      setError("");
      setUploadState(null);
      setSelectedKeyword("");
      setKeywordState("idle");
      setKeywordError("");
      setKeywordExplanation(null);
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
        setError("");
        const pdfData = await requestArrayBuffer(currentPaper.pdf_url, settings.timeoutSeconds);
        const pdfText = await extractPdfText(pdfData);
        setPaperText(pdfText);
        const generated = await generatePaperSummary(settings, currentPaper, pdfText);
        await saveCachedSummary(generated);
        if (!cancelled) {
          setSummary(generated);
          setState("ready");
          onSummaryReady?.(currentPaper.id);
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

  async function handleUploadedFile(file: File | null) {
    if (!file || !paper) {
      return;
    }

    try {
      setState("loading");
      setUploadState({
        paper_id: paper.id,
        pdf_required: true,
        upload_status: "processing"
      });
      const pdfText = await extractPdfText(file);
      setPaperText(pdfText);
      const generated = await generatePaperSummary(settings, paper, pdfText);
      await saveCachedSummary(generated);
      setSummary(generated);
      setState("ready");
      onSummaryReady?.(paper.id);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "上传 PDF 后生成失败。");
      setUploadState({
        paper_id: paper.id,
        pdf_required: true,
        upload_status: "failed"
      });
      setState("error");
    }
  }

  async function ensurePaperText(currentPaper: PaperRecord) {
    if (paperText) {
      return paperText;
    }

    if (!currentPaper.pdf_url) {
      throw new Error("当前论文没有可用的 PDF 链接，请先上传 PDF。");
    }

    const pdfData = await requestArrayBuffer(currentPaper.pdf_url, settings.timeoutSeconds);
    const extractedText = await extractPdfText(pdfData);
    setPaperText(extractedText);
    return extractedText;
  }

  async function handleKeywordClick(keyword: string) {
    if (!paper) {
      return;
    }

    setSelectedKeyword(keyword);
    setKeywordError("");
    setKeywordState("loading");

    try {
      const cached = await getCachedTermExplanation(
        paper.id,
        keyword,
        settings.paperSummaryModel,
        TERM_EXPLANATION_PROMPT_VERSION
      );

      if (cached) {
        setKeywordExplanation(cached);
        setKeywordState("ready");
        return;
      }

      const currentPaperText = await ensurePaperText(paper);
      const generated = await generateTermExplanation(settings, paper, keyword, currentPaperText);
      await saveCachedTermExplanation(generated);
      setKeywordExplanation(generated);
      setKeywordState("ready");
    } catch (cause) {
      setKeywordError(cause instanceof Error ? cause.message : "术语解释生成失败。");
      setKeywordState("error");
    }
  }

  if (!paper) {
    return (
      <section className="detail-panel status-card">
        <p>未找到论文信息。</p>
      </section>
    );
  }

  return (
    <section className="detail-panel">
      <div className="detail-panel-head">
        <div>
          <p className="eyebrow">AI Summary</p>
          <h2>本地生成总结</h2>
        </div>
        <div className="detail-panel-status">
          {summary ? <span className="summary-status-chip">已生成总结</span> : null}
          <span className="score-chip">缓存键 {paper.id.slice(0, 14)}</span>
        </div>
      </div>

      {state === "needs-settings" ? (
        <div className="status-card">
          <p>请先配置模型 Base URL、API Key 和模型名，再生成总结。</p>
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
            <a className="ghost-link" href={paper.pdf_url || paper.paper_url} target="_blank" rel="noreferrer">
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
                <button
                  className={selectedKeyword === keyword ? "tag tag-button tag-active" : "tag tag-button"}
                  key={keyword}
                  type="button"
                  onClick={() => void handleKeywordClick(keyword)}
                >
                  {keyword}
                </button>
                ))}
              </div>
              <p className="keyword-hint">点击术语，可用当前配置的大语言模型查看数据库语境解释与论文上下文。</p>
              {keywordState === "loading" && selectedKeyword ? (
                <div className="keyword-detail-card">
                  <p>正在解释术语 “{selectedKeyword}”...</p>
                </div>
              ) : null}
              {keywordState === "error" && keywordError ? (
                <div className="keyword-detail-card">
                  <p>{keywordError}</p>
                </div>
              ) : null}
              {keywordState === "ready" && keywordExplanation ? (
                <div className="keyword-detail-card">
                  <h4>{keywordExplanation.explanation_sections.term}</h4>
                  <p><strong>术语解释：</strong>{keywordExplanation.explanation_sections.definition}</p>
                  <p><strong>论文上下文：</strong>{keywordExplanation.explanation_sections.paperContext}</p>
                  <p><strong>为什么重要：</strong>{keywordExplanation.explanation_sections.whyItMatters}</p>
                </div>
              ) : null}
            </section>
          </div>
      ) : null}
    </section>
  );
}
