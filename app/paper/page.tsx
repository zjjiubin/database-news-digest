"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PaperSummaryPanel } from "../components/paper-summary-panel";
import { SettingsPanel } from "../components/settings-panel";
import { clearAllSummaries, getCachedSummary } from "../lib/cache";
import { PROMPT_VERSION } from "../lib/constants";
import { APP_NAME } from "../lib/app-config";
import { fetchPaperRecord } from "../lib/data";
import { testModelConnection } from "../lib/llm";
import { loadSettings, saveSettings } from "../lib/settings";
import type { ModelSettings, PaperRecord } from "../types";

function PaperDetailScreen() {
  const searchParams = useSearchParams();
  const paperId = searchParams.get("id") ?? "";
  const [paper, setPaper] = useState<PaperRecord | null>(null);
  const [settings, setSettings] = useState<ModelSettings>(loadSettings);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [error, setError] = useState("");
  const [hasSummary, setHasSummary] = useState(false);

  useEffect(() => {
    async function run() {
      if (!paperId) {
        setStatus("error");
        setError("缺少论文 ID。");
        return;
      }

      setStatus("loading");
      setError("");
      try {
        const payload = await fetchPaperRecord(paperId);
        setPaper(payload);
        setStatus("ready");
      } catch (cause) {
        setStatus("error");
        setError(cause instanceof Error ? cause.message : "论文详情读取失败。");
      }
    }

    void run();
  }, [paperId]);

  useEffect(() => {
    async function loadSummaryStatus() {
      if (!paperId || !settings.paperSummaryModel) {
        setHasSummary(false);
        return;
      }

      const cached = await getCachedSummary(paperId, settings.paperSummaryModel, PROMPT_VERSION);
      setHasSummary(Boolean(cached));
    }

    void loadSummaryStatus();
  }, [paperId, settings.paperSummaryModel]);

  return (
    <main className="page-shell">
      <SettingsPanel
        open={settingsOpen}
        settings={settings}
        onClose={() => setSettingsOpen(false)}
        onSave={(nextSettings) => {
          saveSettings(nextSettings);
          setSettings(nextSettings);
        }}
        onTest={testModelConnection}
        onClearCache={clearAllSummaries}
      />

      <section className="detail-hero">
        <div>
          <p className="eyebrow">{APP_NAME}</p>
          <h1>论文详情与 AI 总结</h1>
          <p className="hero-copy">这个页面后续会扩展成 PDF 阅读区与 AI 分析区并排的完整阅读工作台。</p>
        </div>
        <div className="hero-actions">
          <Link className="secondary-link" href="/">
            返回论文列表
          </Link>
          <button className="primary-button" type="button" onClick={() => setSettingsOpen(true)}>
            模型设置
          </button>
        </div>
      </section>

      {status === "loading" ? <div className="status-card">正在读取论文详情...</div> : null}
      {status === "error" ? <div className="status-card">{error}</div> : null}

      {status === "ready" && paper ? (
        <section className="detail-layout">
          <article className="detail-panel">
            <div className="paper-head">
              <p className="paper-source">
                {paper.source} · {paper.published}
              </p>
              <div className="paper-head-badges">
                {hasSummary ? <span className="summary-status-chip">已总结</span> : null}
                <span className="score-chip">评分 {paper.score}</span>
              </div>
            </div>
            <h2 className="detail-title">{paper.title}</h2>
            <p className="paper-meta">{paper.authors.join(", ")}</p>
            <div className="paper-tags">
              {paper.category_titles.map((title) => (
                <span className="tag" key={title}>
                  {title}
                </span>
              ))}
            </div>
            <p className="paper-reason">{paper.importance_reason}</p>
            <div className="detail-actions">
              <a
                className="secondary-link"
                href={paper.pdf_url || paper.paper_url}
                target="_blank"
                rel="noreferrer"
              >
                打开论文原文
              </a>
              {paper.pdf_url ? (
                <a className="ghost-link" href={paper.pdf_url} target="_blank" rel="noreferrer">
                  打开 PDF
                </a>
              ) : null}
            </div>
            <div className="detail-abstract-card">
              <h3>摘要</h3>
              <p>{paper.abstract}</p>
            </div>
          </article>

          <PaperSummaryPanel
            paper={paper}
            settings={settings}
            onSummaryReady={(readyPaperId) => {
              if (readyPaperId === paper.id) {
                setHasSummary(true);
              }
            }}
          />
        </section>
      ) : null}
    </main>
  );
}

export default function PaperPage() {
  return (
    <Suspense
      fallback={
        <main className="page-shell">
          <div className="status-card">正在准备论文详情...</div>
        </main>
      }
    >
      <PaperDetailScreen />
    </Suspense>
  );
}
