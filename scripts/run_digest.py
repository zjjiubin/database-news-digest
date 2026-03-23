#!/usr/bin/env python3
from __future__ import annotations

import datetime as dt
import html
import json
import re
import time
import unicodedata
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from dataclasses import dataclass
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
REPORTS_DIR = ROOT / "reports"
ARCHIVE_DIR = REPORTS_DIR / "archive"
LATEST_REPORT = REPORTS_DIR / "db-research-digest.md"
CACHE_DIR = ROOT / ".cache"
OPENALEX_CACHE = CACHE_DIR / "openalex_lookup.json"
CROSSREF_CACHE = CACHE_DIR / "crossref_lookup.json"

ARXIV_API = (
    "https://export.arxiv.org/api/query?"
    + urllib.parse.urlencode(
        {
            "search_query": "cat:cs.DB",
            "start": 0,
            "max_results": 80,
            "sortBy": "submittedDate",
            "sortOrder": "descending",
        }
    )
)

OPENALEX_SOURCES = [
    (
        "PVLDB",
        "https://openalex.org/S4210226185",
        "Proceedings of the VLDB Endowment",
    ),
    (
        "PACMMOD",
        "https://openalex.org/S4387289859",
        "Proceedings of the ACM on Management of Data",
    ),
]

DBLP_INDEX_SOURCES = [
    ("ICDE", "https://dblp.org/db/conf/icde/index.xml"),
    ("CIDR", "https://dblp.org/db/conf/cidr/index.xml"),
]

DBLP_LOOKUP_LIMITS = {
    "ICDE": 12,
    "CIDR": 12,
}

INTEREST_CATEGORIES = ["storage engine", "query optimization", "olap"]

CATEGORY_TITLES = {
    "storage engine": "存储引擎",
    "query optimization": "查询优化",
    "olap": "OLAP / 分析执行",
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
        "storage hierarchy",
        "hash index",
        "learned index",
        "transaction",
        "concurrency control",
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
        "rewrite",
        "join",
        "sampling",
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
        "spark sql",
        "data warehouse",
        "approximate query processing",
    ],
}

DISCOVERY_KEYWORDS = sorted(
    {
        keyword
        for keywords in CATEGORY_RULES.values()
        for keyword in keywords
        if len(keyword) >= 4
    }
    | {
        "execution",
        "sql",
        "vector",
        "throughput",
        "latency",
        "compression",
        "cache",
        "index",
        "oltp",
        "scan",
    }
)

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
    "disaggregated": 2,
    "spark": 1,
}

SIGNAL_LABELS = {
    "system": "有系统实现",
    "prototype": "有原型实现",
    "benchmark": "带基准测试",
    "evaluation": "有实验评估",
    "real-world": "贴近真实场景",
    "production": "带生产环境信号",
    "throughput": "关注吞吐",
    "latency": "关注延迟",
    "vectorized": "涉及向量化执行",
    "cost model": "涉及代价模型",
    "cardinality": "涉及基数估计",
    "compression": "涉及压缩",
    "join": "涉及连接处理",
    "disaggregated": "涉及解耦式架构",
    "spark": "涉及 Spark SQL",
}

VENUE_BONUS = {
    "PACMMOD": 5,
    "PVLDB": 5,
    "ICDE": 4,
    "CIDR": 4,
    "arXiv cs.DB": 2,
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
    doi: str = ""


def fetch_text(url: str) -> str:
    last_error: Exception | None = None
    for attempt in range(4):
        request = urllib.request.Request(
            url,
            headers={"User-Agent": "database-news-digest/0.2 (research tracking)"},
        )
        try:
            with urllib.request.urlopen(request, timeout=20) as response:
                return response.read().decode("utf-8", errors="replace")
        except Exception as error:
            last_error = error
            if attempt == 3:
                break
            time.sleep(1.5 * (attempt + 1))
    raise last_error if last_error else RuntimeError(f"无法获取: {url}")


def fetch_json(url: str) -> dict:
    return json.loads(fetch_text(url))


def clean_text(value: str) -> str:
    value = html.unescape(value or "")
    value = re.sub(r"<[^>]+>", "", value)
    value = re.sub(r"\s+", " ", value)
    return value.strip()


def normalize_title(value: str) -> str:
    value = clean_text(value).lower()
    value = re.sub(r"[^a-z0-9]+", " ", value)
    return " ".join(value.split())


def decode_abstract(abstract_index: dict | None) -> str:
    if not abstract_index:
        return ""
    positions: list[tuple[int, str]] = []
    for token, indexes in abstract_index.items():
        for index in indexes:
            positions.append((index, token))
    positions.sort()
    return clean_text(" ".join(token for _, token in positions))


def load_openalex_cache() -> dict:
    if OPENALEX_CACHE.exists():
        return json.loads(OPENALEX_CACHE.read_text(encoding="utf-8"))
    return {}


def save_openalex_cache(cache: dict) -> None:
    CACHE_DIR.mkdir(parents=True, exist_ok=True)
    OPENALEX_CACHE.write_text(
        json.dumps(cache, ensure_ascii=False, indent=2, sort_keys=True),
        encoding="utf-8",
    )


def load_crossref_cache() -> dict:
    if CROSSREF_CACHE.exists():
        return json.loads(CROSSREF_CACHE.read_text(encoding="utf-8"))
    return {}


def save_crossref_cache(cache: dict) -> None:
    CACHE_DIR.mkdir(parents=True, exist_ok=True)
    CROSSREF_CACHE.write_text(
        json.dumps(cache, ensure_ascii=False, indent=2, sort_keys=True),
        encoding="utf-8",
    )


def title_prefilter(title: str) -> bool:
    haystack = normalize_title(title)
    return any(keyword in haystack for keyword in DISCOVERY_KEYWORDS)


def surname_slug(name: str) -> str:
    surname = clean_text(name).split()[-1] if clean_text(name) else ""
    surname = unicodedata.normalize("NFKD", surname).encode("ascii", "ignore").decode("ascii")
    surname = re.sub(r"[^a-zA-Z0-9]+", "", surname).lower()
    return surname


def fetch_crossref_metadata(doi: str, cache: dict) -> dict | None:
    doi = doi.replace("https://doi.org/", "").strip()
    if not doi:
        return None
    if doi in cache:
        return cache[doi]
    try:
        payload = fetch_json(f"https://api.crossref.org/works/{doi}")
        message = payload.get("message")
    except Exception:
        message = None
    cache[doi] = message
    return message


def build_pvldb_official_link(work: dict, authors: list[str], doi: str, crossref_cache: dict) -> str:
    biblio = work.get("biblio") or {}
    volume = biblio.get("volume")
    first_page = biblio.get("first_page")
    last_author = authors[-1] if authors else ""

    if doi:
        crossref = fetch_crossref_metadata(doi, crossref_cache)
        if crossref:
            volume = volume or str(crossref.get("volume") or "")
            if not first_page and crossref.get("page"):
                first_page = str(crossref["page"]).split("-")[0]
            if crossref.get("author"):
                last_author = crossref["author"][-1].get("family", "")

    if not (volume and first_page and last_author):
        return ""

    return f"https://www.vldb.org/pvldb/vol{volume}/p{first_page}-{surname_slug(last_author)}.pdf"


def classify_paper(title: str, summary: str) -> list[str]:
    haystack = f"{title} {summary}".lower()
    categories: list[str] = []
    for category, keywords in CATEGORY_RULES.items():
        if any(keyword in haystack for keyword in keywords):
            categories.append(category)
    return categories


def score_paper(summary: str, categories: list[str], source: str) -> tuple[int, str]:
    text = summary.lower()
    score = 3 * len(categories) + VENUE_BONUS.get(source, 0)
    matched_signals: list[str] = []
    for keyword, bonus in BONUS_KEYWORDS.items():
        if keyword in text:
            score += bonus
            matched_signals.append(SIGNAL_LABELS[keyword])
    if any(cat in INTEREST_CATEGORIES for cat in categories):
        score += 4
    if not matched_signals:
        matched_signals.append("主题高度相关")
    return score, "，".join(matched_signals[:4])


def summarize_for_chinese(summary: str, categories: list[str]) -> str:
    category_cn = "、".join(CATEGORY_TITLES[category] for category in categories)
    text = summary.lower()
    focus = []
    if "system" in text or "prototype" in text:
        focus.append("更偏系统实现")
    if "benchmark" in text or "evaluation" in text:
        focus.append("摘要里有较强实验评估信号")
    if "real-world" in text or "production" in text:
        focus.append("和真实业务或生产环境关联较强")
    if "cost model" in text or "cardinality" in text:
        focus.append("对优化器核心决策较有参考价值")
    if "vectorized" in text or "columnar" in text:
        focus.append("适合关注分析执行链路")
    if "transaction" in text or "concurrency control" in text:
        focus.append("和事务/并发控制设计相关")
    if not focus:
        focus.append("建议先看问题定义和实验设置")
    return f"这篇工作主要落在 {category_cn}。{focus[0]}。"


def latest_dblp_child_xml(index_xml_url: str) -> str:
    raw = fetch_text(index_xml_url)
    match = re.search(r"<url>(db/[^<]+?\.html)</url>", raw)
    if match and match.group(1).endswith("w.html"):
        match = None
    if not match:
        match = re.search(r'href="(db/[^"]+?\.html)"', raw)
    if not match:
        raise RuntimeError(f"无法从 {index_xml_url} 解析最新 DBLP 子页面")
    return f"https://dblp.org/{match.group(1).replace('.html', '.xml')}"


def parse_dblp_records(xml_text: str, source_name: str) -> list[dict]:
    records: list[dict] = []
    for tag in ("article", "inproceedings"):
        pattern = rf"<{tag}\b[^>]*>(.*?)</{tag}>"
        for block in re.findall(pattern, xml_text, flags=re.DOTALL):
            title_match = re.search(r"<title>(.*?)</title>", block, flags=re.DOTALL)
            if not title_match:
                continue
            title = clean_text(title_match.group(1))
            if not title or title.lower().startswith(("front matter", "editorial")):
                continue
            authors = [
                clean_text(author)
                for author in re.findall(r"<author\b[^>]*>(.*?)</author>", block, flags=re.DOTALL)
            ]
            doi_match = re.search(r"<doi>(.*?)</doi>", block, flags=re.DOTALL)
            ee_matches = [
                clean_text(value)
                for value in re.findall(r"<ee>(.*?)</ee>", block, flags=re.DOTALL)
            ]
            year_match = re.search(r"<year>(.*?)</year>", block, flags=re.DOTALL)
            link = ""
            for candidate in ee_matches:
                if candidate.startswith("http"):
                    link = candidate
                    break
            records.append(
                {
                    "title": title,
                    "authors": authors,
                    "doi": clean_text(doi_match.group(1)) if doi_match else "",
                    "published": clean_text(year_match.group(1)) if year_match else "",
                    "link": link,
                    "source": source_name,
                }
            )
    return records


def openalex_lookup(title: str, doi: str, cache: dict) -> dict | None:
    cache_key = doi.strip() or normalize_title(title)
    if cache_key in cache:
        return cache[cache_key]

    result: dict | None = None
    try:
        if doi:
            url = "https://api.openalex.org/works?" + urllib.parse.urlencode(
                {"filter": f"doi:{doi}", "per-page": 1}
            )
            payload = fetch_json(url)
            if payload.get("results"):
                result = payload["results"][0]
        if result is None:
            url = "https://api.openalex.org/works?" + urllib.parse.urlencode(
                {"search": title, "per-page": 5}
            )
            payload = fetch_json(url)
            normalized_target = normalize_title(title)
            candidates = payload.get("results", [])
            for candidate in candidates:
                if normalize_title(candidate.get("display_name", "")) == normalized_target:
                    result = candidate
                    break
            if result is None and candidates:
                result = candidates[0]
    except Exception:
        result = None

    cache[cache_key] = result
    return result


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
        score, reason = score_paper(summary, categories, "arXiv cs.DB")
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


def fetch_openalex_source_papers(
    source_key: str,
    source_id: str,
    source_name: str,
    from_date: str,
    crossref_cache: dict,
    max_pages: int = 1,
    per_page: int = 40,
) -> list[Paper]:
    papers: list[Paper] = []
    for page in range(1, max_pages + 1):
        url = "https://api.openalex.org/works?" + urllib.parse.urlencode(
            {
                "filter": f"primary_location.source.id:{source_id},from_publication_date:{from_date}",
                "per-page": per_page,
                "page": page,
                "sort": "publication_date:desc",
            }
        )
        payload = fetch_json(url)
        for work in payload.get("results", []):
            title = clean_text(work.get("display_name", ""))
            summary = decode_abstract(work.get("abstract_inverted_index"))
            if not title or not summary:
                continue
            categories = classify_paper(title, summary)
            if not categories:
                continue
            authors = [
                clean_text(author.get("author", {}).get("display_name", ""))
                for author in work.get("authorships", [])
                if author.get("author")
            ]
            doi = (work.get("doi") or "").replace("https://doi.org/", "")
            link = (
                (work.get("primary_location") or {}).get("landing_page_url")
                or work.get("doi")
                or work.get("id")
                or ""
            )
            if source_key == "PVLDB":
                official_link = build_pvldb_official_link(work, authors, doi, crossref_cache)
                if official_link:
                    link = official_link
            score, reason = score_paper(summary, categories, source_key)
            papers.append(
                Paper(
                    title=title,
                    authors=authors,
                    summary=summary,
                    link=link,
                    published=work.get("publication_date", "") or "",
                    source=source_key,
                    categories=categories,
                    score=score,
                    importance_reason=reason,
                    doi=doi,
                )
            )
    return papers


def fetch_dblp_enriched_papers(index_xml_url: str, source_name: str, cache: dict) -> list[Paper]:
    child_xml_url = latest_dblp_child_xml(index_xml_url)
    records = parse_dblp_records(fetch_text(child_xml_url), source_name)
    filtered_records = [record for record in records if title_prefilter(record["title"])]
    filtered_records = filtered_records[: DBLP_LOOKUP_LIMITS.get(source_name, len(filtered_records))]
    papers: list[Paper] = []
    for record in filtered_records:
        openalex = openalex_lookup(record["title"], record["doi"], cache)
        if not openalex:
            continue
        summary = decode_abstract(openalex.get("abstract_inverted_index"))
        if not summary:
            continue
        categories = classify_paper(record["title"], summary)
        if not categories:
            continue
        authors = record["authors"] or [
            clean_text(author.get("author", {}).get("display_name", ""))
            for author in openalex.get("authorships", [])
            if author.get("author")
        ]
        link = (
            record["link"]
            or (openalex.get("primary_location") or {}).get("landing_page_url")
            or openalex.get("doi")
            or ""
        )
        published = openalex.get("publication_date", "") or record["published"]
        score, reason = score_paper(summary, categories, source_name)
        papers.append(
            Paper(
                title=record["title"],
                authors=authors,
                summary=summary,
                link=link,
                published=published,
                source=source_name,
                categories=categories,
                score=score,
                importance_reason=reason,
                doi=record["doi"],
            )
        )
    return papers


def deduplicate_papers(papers: list[Paper]) -> list[Paper]:
    deduped: dict[str, Paper] = {}
    for paper in sorted(papers, key=lambda item: (-item.score, item.source, item.title)):
        key = paper.doi.strip().lower() if paper.doi else normalize_title(paper.title)
        existing = deduped.get(key)
        if existing is None or paper.score > existing.score:
            deduped[key] = paper
    return list(deduped.values())


def build_source_summary(papers: list[Paper]) -> dict[str, int]:
    summary: dict[str, int] = {}
    for paper in papers:
        summary[paper.source] = summary.get(paper.source, 0) + 1
    return dict(sorted(summary.items(), key=lambda item: (-item[1], item[0])))


def render_report(papers: list[Paper], run_time: dt.datetime, source_summary: dict[str, int]) -> str:
    ARCHIVE_DIR.mkdir(parents=True, exist_ok=True)
    REPORTS_DIR.mkdir(parents=True, exist_ok=True)

    grouped: dict[str, list[Paper]] = {category: [] for category in INTEREST_CATEGORIES}
    others: list[Paper] = []

    ordered_papers = sorted(
        papers, key=lambda item: (-item.score, item.published or "", item.title.lower())
    )
    for paper in ordered_papers:
        placed = False
        for category in INTEREST_CATEGORIES:
            if category in paper.categories:
                grouped[category].append(paper)
                placed = True
        if not placed:
            others.append(paper)

    top_picks = ordered_papers[:8]
    lines: list[str] = []
    lines.append("# 数据库研究追踪简报")
    lines.append("")
    lines.append(f"- 生成时间：{run_time.strftime('%Y-%m-%d %H:%M:%S %Z')}")
    lines.append("- 跟踪渠道：arXiv cs.DB、PVLDB、PACMMOD、ICDE、CIDR、DBLP")
    lines.append(f"- 本次纳入论文：{len(papers)} 篇")
    lines.append(
        "- 来源分布：" + "；".join(f"{name} {count} 篇" for name, count in source_summary.items())
    )
    lines.append("")
    lines.append("## 本期最值得优先阅读")
    lines.append("")
    for idx, paper in enumerate(top_picks, start=1):
        lines.append(f"{idx}. [{paper.title}]({paper.link})")
        lines.append(
            f"   - 来源：{paper.source} | 日期：{paper.published} | 评分：{paper.score} | 分类：{'、'.join(CATEGORY_TITLES[c] for c in paper.categories)}"
        )
        lines.append(f"   - 为什么值得看：{paper.importance_reason}")
        lines.append(f"   - 摘要判断：{summarize_for_chinese(paper.summary, paper.categories)}")

    for category in INTEREST_CATEGORIES:
        items = grouped[category][:10]
        lines.append("")
        lines.append(f"## {CATEGORY_TITLES[category]}")
        lines.append("")
        if not items:
            lines.append("本轮没有足够匹配的论文。")
            continue
        for paper in items:
            lines.append(f"- [{paper.title}]({paper.link})")
            lines.append(
                f"  来源：{paper.source} | 日期：{paper.published} | 评分：{paper.score} | 作者：{', '.join(paper.authors[:4])}"
            )
            lines.append(f"  为什么重要：{paper.importance_reason}")
            lines.append(f"  摘要判断：{summarize_for_chinese(paper.summary, paper.categories)}")

    if others:
        lines.append("")
        lines.append("## 其他相关论文")
        lines.append("")
        for paper in others[:6]:
            lines.append(f"- [{paper.title}]({paper.link})")
            lines.append(f"  来源：{paper.source} | 日期：{paper.published}")
            lines.append(f"  摘要判断：{summarize_for_chinese(paper.summary, paper.categories)}")

    lines.append("")
    lines.append("## 说明")
    lines.append("")
    lines.append("- PVLDB 与 PACMMOD 直接使用 OpenAlex 的期刊源元数据和摘要。")
    lines.append("- ICDE 与 CIDR 通过 DBLP 发现最新届次，再用 DOI/标题到 OpenAlex 补摘要。")
    lines.append("- 当前排序依据：来源权重、和你关注方向的相关度、系统实现/实验/生产信号。")
    lines.append("- 标题保留原文，报告说明统一使用中文。")
    lines.append("")
    return "\n".join(lines)


def main() -> None:
    now = dt.datetime.now().astimezone()
    from_date = (now - dt.timedelta(days=400)).strftime("%Y-%m-%d")
    openalex_cache = load_openalex_cache()
    crossref_cache = load_crossref_cache()

    papers: list[Paper] = []
    print("Fetching arXiv cs.DB...")
    papers.extend(parse_arxiv_entries(fetch_text(ARXIV_API)))
    print(f"arXiv cs.DB done: {len(papers)} papers")

    for source_key, source_id, _source_name in OPENALEX_SOURCES:
        print(f"Fetching {source_key}...")
        papers.extend(
            fetch_openalex_source_papers(
                source_key,
                source_id,
                _source_name,
                from_date,
                crossref_cache,
            )
        )
        print(f"{source_key} done: {len(papers)} cumulative papers")

    for source_name, index_xml_url in DBLP_INDEX_SOURCES:
        print(f"Fetching {source_name} via DBLP + OpenAlex...")
        try:
            papers.extend(fetch_dblp_enriched_papers(index_xml_url, source_name, openalex_cache))
            print(f"{source_name} done: {len(papers)} cumulative papers")
        except Exception as error:
            print(f"{source_name} skipped: {error}")

    papers = deduplicate_papers(papers)
    source_summary = build_source_summary(papers)
    report = render_report(papers, now, source_summary)

    save_openalex_cache(openalex_cache)
    save_crossref_cache(crossref_cache)
    LATEST_REPORT.write_text(report, encoding="utf-8")
    archive_name = f"db-research-digest-{now.strftime('%Y%m%d-%H%M%S')}.md"
    archive_path = ARCHIVE_DIR / archive_name
    archive_path.parent.mkdir(parents=True, exist_ok=True)
    archive_path.write_text(report, encoding="utf-8")

    print(f"Wrote {LATEST_REPORT}")
    print(f"Archived {archive_path}")
    print(f"Collected {len(papers)} relevant papers")
    print("Source summary:", json.dumps(source_summary, ensure_ascii=False))


if __name__ == "__main__":
    main()
