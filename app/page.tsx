"use client";

import { startTransition, useEffect, useMemo, useState, useDeferredValue } from "react";
import { SummaryModal } from "./components/summary-modal";
import { SettingsPanel } from "./components/settings-panel";
import { clearAllSummaries } from "./lib/cache";
import { loadSettings, saveSettings } from "./lib/settings";
import { testModelConnection } from "./lib/llm";
import type { DigestData, ModelSettings, PaperRecord } from "./types";

function basePath() {
  return process.env.NEXT_PUBLIC_BASE_PATH || "";
}

export default function HomePage() {
  const [data, setData] = useState<DigestData | null>(null);
  const [settings, setSettings] = useState<ModelSettings>(loadSettings);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPaper, setSelectedPaper] = useState<PaperRecord | null>(null);
  const [search, setSearch] = useState("");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const deferredSearch = useDeferredValue(search);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${basePath()}/data/latest.json`);
      const payload = (await response.json()) as DigestData;
      setData(payload);
      setLoading(false);
    }

    void fetchData();
  }, []);

  const filteredPapers = useMemo(() => {
    if (!data) {
      return [];
    }

    const keyword = deferredSearch.trim().toLowerCase();
    return data.papers.filter((paper) => {
      const categoryPass = selectedCategory === "all" || paper.categories.includes(selectedCategory);
      if (!categoryPass) {
        return false;
      }
      if (!keyword) {
        return true;
      }
      return [paper.title, paper.source, paper.abstract, paper.authors.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(keyword);
    });
  }, [data, deferredSearch, selectedCategory]);

  const topPickSet = useMemo(() => new Set(data?.top_pick_ids ?? []), [data]);

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

      <section className="hero">
        <div>
          <p className="eyebrow">Database Research Reader</p>
          <h1>论文追踪、全文总结、后续可扩展 PDF 阅读器</h1>
          <p className="hero-copy">
            先用自动采集脚本整理数据库论文，再在 app 里点开单篇论文做全文 AI 总结。模型
            API Key 只保存在当前浏览器。
          </p>
        </div>
        <div className="hero-actions">
          <button className="primary-button" type="button" onClick={() => setSettingsOpen(true)}>
            模型设置
          </button>
          <a className="secondary-link" href="https://github.com/zjjiubin/database-news-digest" target="_blank" rel="noreferrer">
            GitHub 仓库
          </a>
        </div>
      </section>

      <section className="toolbar">
        <div className="toolbar-card">
          <span>总论文数</span>
          <strong>{data?.total_papers ?? "--"}</strong>
        </div>
        <div className="toolbar-card wide">
          <span>来源分布</span>
          <strong>
            {data
              ? Object.entries(data.source_summary)
                  .map(([source, count]) => `${source} ${count}`)
                  .join(" · ")
              : "--"}
          </strong>
        </div>
        <label className="search-box">
          <span>检索</span>
          <input
            placeholder="按标题、来源、摘要关键词搜索"
            value={search}
            onChange={(event) => {
              const value = event.target.value;
              startTransition(() => setSearch(value));
            }}
          />
        </label>
      </section>

      <section className="filters">
        {["all", "storage engine", "query optimization", "olap"].map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "filter active" : "filter"}
            type="button"
            onClick={() => setSelectedCategory(category)}
          >
            {category === "all" ? "全部" : data?.categories[category]?.title ?? category}
          </button>
        ))}
      </section>

      <section className="paper-grid">
        {loading ? <p className="status-text">正在读取最新报告...</p> : null}
        {!loading && filteredPapers.length === 0 ? <p className="status-text">没有匹配的论文。</p> : null}
        {filteredPapers.map((paper) => (
          <article className={topPickSet.has(paper.id) ? "paper-card featured" : "paper-card"} key={paper.id}>
            <div className="paper-head">
              <p className="paper-source">
                {paper.source} · {paper.published}
              </p>
              <span className="score-chip">评分 {paper.score}</span>
            </div>
            <h2>{paper.title}</h2>
            <p className="paper-meta">{paper.authors.slice(0, 4).join(", ")}</p>
            <p className="paper-abstract">{paper.abstract}</p>
            <div className="paper-tags">
              {paper.category_titles.map((title) => (
                <span className="tag" key={title}>
                  {title}
                </span>
              ))}
            </div>
            <p className="paper-reason">{paper.importance_reason}</p>
            <div className="paper-actions">
              <a href={paper.paper_url} target="_blank" rel="noreferrer">
                论文原文
              </a>
              <button className="link-button" type="button" onClick={() => setSelectedPaper(paper)}>
                AI 总结
              </button>
            </div>
          </article>
        ))}
      </section>

      <SummaryModal paper={selectedPaper} settings={settings} onClose={() => setSelectedPaper(null)} />
    </main>
  );
}
