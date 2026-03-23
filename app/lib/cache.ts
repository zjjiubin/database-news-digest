"use client";

import { openDB } from "idb";
import type { LocalSummaryCache } from "../types";

const DB_NAME = "database-news-digest";
const STORE_NAME = "summaries";

async function getDb() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "cache_key" });
      }
    }
  });
}

function toCacheKey(paperId: string, model: string, promptVersion: string) {
  return `${paperId}::${model}::${promptVersion}`;
}

export async function getCachedSummary(
  paperId: string,
  model: string,
  promptVersion: string
): Promise<LocalSummaryCache | null> {
  const db = await getDb();
  const record = await db.get(STORE_NAME, toCacheKey(paperId, model, promptVersion));
  return record ? (record.payload as LocalSummaryCache) : null;
}

export async function saveCachedSummary(summary: LocalSummaryCache) {
  const db = await getDb();
  await db.put(STORE_NAME, {
    cache_key: toCacheKey(summary.paper_id, summary.model, summary.prompt_version),
    payload: summary
  });
}

export async function clearAllSummaries() {
  const db = await getDb();
  await db.clear(STORE_NAME);
}
