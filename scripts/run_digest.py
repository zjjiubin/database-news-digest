#!/usr/bin/env python3
from __future__ import annotations

import datetime as dt
import html
import re
import textwrap
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from dataclasses import dataclass
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
REPORTS_DIR = ROOT / "reports"
ARCHIVE_DIR = REPORTS_DIR / "archive"
LATEST_REPORT = REPORTS_DIR / "db-research-digest.md"

ARXIV_API = (
    "https://export.arxiv.org/api/query?"
    + urllib.parse.urlencode(
        {
            "search_query": "cat:cs.DB",
            "start": 0,
            "max_results": 60,
            "sortBy": "submittedDate",
            "sortOrder": "descending",
        }
    )
)


INTEREST_CATEGORIES = ["storage engine", "query optimization", "olap"]

CATEGORY_TITLES = {
    "storage engine": "Storage Engine",
    "query optimization": "Query Optimization",
    "olap": "OLAP",
}

CATEGORY_RULES = {
    "storage engine": [
        "storage engine",
        "lsm",
        "b-tree",
        "btree",
        "buffer manager",
        "recovery",
        "logging",
        "write-ahead",
        "compaction",
        "index structure",
        "page layout",
        "tuple layout",
        "key-value store",
        "rocksdb",
    ],
    "query optimization": [
        "query optimization",
        "query optimizer",
        "join order",
        "join ordering",
        "cardinality estimation",
        "cost model",
        "re-optimization",
        "query plan",
        "plan selection",
        "adaptive query",
        "optimizer",
    ],
    "olap": [
        "olap",
        "analytical query",
        "analytics",
        "column store",
        "columnar",
        "vectorized",
        "vectorization",
        "tpc-h",
        "tpc-ds",
        "clickbench",
        "star schema",
        "warehouse",
        "lakehouse",
        "htap",
        "materialized view",
    ],
}

BONUS_KEYWORDS = {
    "system": 2,
    "prototype": 2,
    "benchmark": 2,
    "evaluation": 1,
    "real-world": 2,
    "production": 3,
    "throughput": 2,
    "latency": 2,
    "vectorized": 2,
    "cost model": 2,
    "cardinality": 2,
    "compression": 1,
    "join": 1,
}


@dataclass
class Paper:
    title: str
    authors: list[str]
    summary: str
    link: str
    published: str
    source: str
    categories: list[str]
    score: int
    importance_reason: str


def fetch_text(url: str) -> str:
    request = urllib.request.Request(
        url,
        headers={"User-Agent": "database-news-digest/0.1 (research tracking)"},
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        return response.read().decode("utf-8", errors="replace")


def clean_text(value: str) -> str:
    value = html.unescape(value)
    value = re.sub(r"\s+", " ", value)
    return value.strip()


def parse_arxiv_entries(raw_xml: str) -> list[Paper]:
    ns = {"atom": "http://www.w3.org/2005/Atom"}
    root = ET.fromstring(raw_xml)
    papers: list[Paper] = []

    for entry in root.findall("atom:entry", ns):
        title = clean_text(entry.findtext("atom:title", default="", namespaces=ns))
        summary = clean_text(entry.findtext("atom:summary", default="", namespaces=ns))
        published = clean_text(entry.findtext("atom:published", default="", namespaces=ns))
        link = ""
        for link_elem in entry.findall("atom:link", ns):
            if link_elem.attrib.get("rel") == "alternate":
                link = link_elem.attrib.get("href", "")
                break
        authors = [
            clean_text(author.findtext("atom:name", default="", namespaces=ns))
            for author in entry.findall("atom:author", ns)
        ]
        categories = classify_paper(title, summary)
        if not categories:
            continue
        score, reason = score_paper(summary, categories)
        papers.append(
            Paper(
                title=title,
                authors=authors,
                summary=summary,
                link=link,
                published=published[:10],
                source="arXiv cs.DB",
                categories=categories,
                score=score,
                importance_reason=reason,
            )
        )

    return papers


def classify_paper(title: str, summary: str) -> list[str]:
    haystack = f"{title} {summary}".lower()
    categories: list[str] = []
    for category, keywords in CATEGORY_RULES.items():
        if any(keyword in haystack for keyword in keywords):
            categories.append(category)
    return categories


def score_paper(summary: str, categories: list[str]) -> tuple[int, str]:
    text = summary.lower()
    score = 3 * len(categories)
    matched_reasons: list[str] = []
    for keyword, bonus in BONUS_KEYWORDS.items():
        if keyword in text:
            score += bonus
            matched_reasons.append(keyword)
    if any(cat in INTEREST_CATEGORIES for cat in categories):
        score += 4
    if not matched_reasons:
        matched_reasons.append("high topical relevance")
    return score, ", ".join(matched_reasons[:4])


def summarize_abstract(summary: str) -> str:
    shortened = textwrap.shorten(summary, width=240, placeholder="...")
    return shortened


def render_report(papers: list[Paper], run_time: dt.datetime) -> str:
    ARCHIVE_DIR.mkdir(parents=True, exist_ok=True)
    REPORTS_DIR.mkdir(parents=True, exist_ok=True)

    grouped: dict[str, list[Paper]] = {category: [] for category in INTEREST_CATEGORIES}
    others: list[Paper] = []

    for paper in sorted(papers, key=lambda item: (-item.score, item.published, item.title)):
        placed = False
        for category in INTEREST_CATEGORIES:
            if category in paper.categories:
                grouped[category].append(paper)
                placed = True
        if not placed:
            others.append(paper)

    top_picks = sorted(papers, key=lambda item: (-item.score, item.published, item.title))[:5]
    lines: list[str] = []
    lines.append("# Database Research Digest")
    lines.append("")
    lines.append(f"- Run time: {run_time.strftime('%Y-%m-%d %H:%M:%S %Z')}")
    lines.append("- Sources this run: arXiv cs.DB")
    lines.append(f"- Candidate papers fetched: {len(papers)}")
    lines.append("")
    lines.append("## Top 5 This Run")
    lines.append("")
    for idx, paper in enumerate(top_picks, start=1):
        lines.append(f"{idx}. [{paper.title}]({paper.link})")
        lines.append(
            f"   - {paper.source} | {paper.published} | score {paper.score} | {', '.join(paper.categories)}"
        )
        lines.append(f"   - Why it stands out: {paper.importance_reason}")
        lines.append(f"   - Summary: {summarize_abstract(paper.summary)}")
    for category in INTEREST_CATEGORIES:
        items = grouped[category][:8]
        lines.append("")
        lines.append(f"## {CATEGORY_TITLES[category]}")
        lines.append("")
        if not items:
            lines.append("No strongly matched papers in this run.")
            continue
        for paper in items:
            lines.append(f"- [{paper.title}]({paper.link})")
            lines.append(
                f"  Source: {paper.source} | Date: {paper.published} | Score: {paper.score} | Authors: {', '.join(paper.authors[:4])}"
            )
            lines.append(f"  Why it matters: {paper.importance_reason}")
            lines.append(f"  Abstract summary: {summarize_abstract(paper.summary)}")

    if others:
        lines.append("")
        lines.append("## Other Relevant Papers")
        lines.append("")
        for paper in others[:5]:
            lines.append(f"- [{paper.title}]({paper.link})")
            lines.append(f"  Source: {paper.source} | Date: {paper.published}")
            lines.append(f"  Abstract summary: {summarize_abstract(paper.summary)}")

    lines.append("")
    lines.append("## Notes")
    lines.append("")
    lines.append("- Current version uses abstract-based classification and ranking.")
    lines.append("- Next expansion targets: PVLDB, PACMMOD/SIGMOD, ICDE, CIDR, DBLP.")
    lines.append("- This run keeps only papers that matched at least one of the three focus directions.")
    lines.append("")
    return "\n".join(lines)


def main() -> None:
    raw_xml = fetch_text(ARXIV_API)
    papers = parse_arxiv_entries(raw_xml)
    now = dt.datetime.now().astimezone()
    report = render_report(papers, now)
    LATEST_REPORT.write_text(report, encoding="utf-8")
    archive_name = f"db-research-digest-{now.strftime('%Y%m%d-%H%M%S')}.md"
    (ARCHIVE_DIR / archive_name).write_text(report, encoding="utf-8")
    print(f"Wrote {LATEST_REPORT}")
    print(f"Archived {ARCHIVE_DIR / archive_name}")
    print(f"Collected {len(papers)} relevant papers")


if __name__ == "__main__":
    main()
