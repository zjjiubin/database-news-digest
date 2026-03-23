# Database News Digest

这个项目用来跟踪数据库领域的新论文，并生成中文 Markdown 简报，重点关注：

- 存储引擎
- 查询优化
- OLAP / 分析执行

当前已经接入这些渠道：

- arXiv `cs.DB`
- `PVLDB`
- `PACMMOD / SIGMOD`
- `ICDE`
- `CIDR`
- `DBLP`（用于发现最新届次和补充元数据）

## 运行方式

```bash
python3 scripts/run_digest.py
npm install
npm run dev
```

## 输出位置

- `reports/db-research-digest.md`：最新简报
- `reports/archive/`：每次运行的归档
- `reports/data/latest.json`：结构化论文索引
- `public/data/latest.json`：Web App 直接读取的数据镜像

## Web App

- 使用 Next.js App Router
- 论文列表直接读取 `public/data/latest.json`
- 模型 Base URL / API Key / 模型名仅保存在浏览器本地
- 点击 `AI 总结` 后，浏览器直接下载 PDF、解析文本并调用兼容 OpenAI 的接口
- 若浏览器拿不到 PDF，会提示手动上传 PDF 后继续总结

## 当前实现

- `PVLDB`、`PACMMOD`：直接从 OpenAlex 获取带摘要的元数据
- `ICDE`、`CIDR`：从 DBLP 找到最新届次后，再用 DOI/标题补摘要
- 报告正文统一用中文输出，论文标题保持原文
- `PVLDB` 只保留 `vldb.org/pvldb/...pdf` 官方 PDF 链接
