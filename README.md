# Database News Digest

This project collects newly published database papers and generates a Markdown digest focused on:

- storage engines
- query optimization
- OLAP

The first version uses arXiv `cs.DB` as a live source and ranks papers from their abstracts. The structure is designed so we can add `PVLDB`, `PACMMOD/SIGMOD`, `ICDE`, `CIDR`, and `DBLP` next.

## Run

```bash
python3 scripts/run_digest.py
```

## Output

- `reports/db-research-digest.md`: latest digest
- `reports/archive/`: dated snapshots for each run

## Repo workflow

Each collection run updates the latest digest and keeps an archived copy in the repository so the history is visible on GitHub.
