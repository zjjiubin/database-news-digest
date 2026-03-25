"use client";

import { Capacitor } from "@capacitor/core";
import { CapacitorSQLite, SQLiteConnection, type SQLiteDBConnection } from "@capacitor-community/sqlite";
import { openDB } from "idb";
import type { LocalSummaryCache, LocalTermExplanationCache } from "../types";

const DB_NAME = "papdoc";
const SUMMARY_STORE_NAME = "summaries";
const TERM_STORE_NAME = "term_explanations";
const NATIVE_DB_NAME = "papdoc_cache";

const sqlite = new SQLiteConnection(CapacitorSQLite);
let nativeDbPromise: Promise<SQLiteDBConnection> | null = null;

function isNativeRuntime() {
  return Capacitor.isNativePlatform();
}

async function getDb() {
  return openDB(DB_NAME, 2, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(SUMMARY_STORE_NAME)) {
        db.createObjectStore(SUMMARY_STORE_NAME, { keyPath: "cache_key" });
      }
      if (!db.objectStoreNames.contains(TERM_STORE_NAME)) {
        db.createObjectStore(TERM_STORE_NAME, { keyPath: "cache_key" });
      }
    }
  });
}

async function getNativeDb() {
  if (!nativeDbPromise) {
    nativeDbPromise = (async () => {
      const consistency = await sqlite.checkConnectionsConsistency();
      const hasConnection = await sqlite.isConnection(NATIVE_DB_NAME, false);

      const db =
        consistency.result && hasConnection.result
          ? await sqlite.retrieveConnection(NATIVE_DB_NAME, false)
          : await sqlite.createConnection(NATIVE_DB_NAME, false, "no-encryption", 1, false);

      const isOpen = await db.isDBOpen();
      if (!isOpen.result) {
        await db.open();
      }

      await db.execute(
        `
        CREATE TABLE IF NOT EXISTS ${SUMMARY_STORE_NAME} (
          cache_key TEXT PRIMARY KEY NOT NULL,
          payload TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS ${TERM_STORE_NAME} (
          cache_key TEXT PRIMARY KEY NOT NULL,
          payload TEXT NOT NULL
        );
        `,
        false
      );

      return db;
    })();
  }

  return nativeDbPromise;
}

function toCacheKey(paperId: string, model: string, promptVersion: string) {
  return `${paperId}::${model}::${promptVersion}`;
}

export async function getCachedSummary(
  paperId: string,
  model: string,
  promptVersion: string
): Promise<LocalSummaryCache | null> {
  if (isNativeRuntime()) {
    const db = await getNativeDb();
    const result = await db.query(
      `SELECT payload FROM ${SUMMARY_STORE_NAME} WHERE cache_key = ? LIMIT 1`,
      [toCacheKey(paperId, model, promptVersion)]
    );

    if (!result.values?.length) {
      return null;
    }

    return JSON.parse(result.values[0].payload as string) as LocalSummaryCache;
  }

  const db = await getDb();
  const record = await db.get(SUMMARY_STORE_NAME, toCacheKey(paperId, model, promptVersion));
  return record ? (record.payload as LocalSummaryCache) : null;
}

export async function saveCachedSummary(summary: LocalSummaryCache) {
  if (isNativeRuntime()) {
    const db = await getNativeDb();
    await db.run(
      `INSERT OR REPLACE INTO ${SUMMARY_STORE_NAME} (cache_key, payload) VALUES (?, ?)`,
      [toCacheKey(summary.paper_id, summary.model, summary.prompt_version), JSON.stringify(summary)],
      false
    );
    return;
  }

  const db = await getDb();
  await db.put(SUMMARY_STORE_NAME, {
    cache_key: toCacheKey(summary.paper_id, summary.model, summary.prompt_version),
    payload: summary
  });
}

export async function listCachedSummaryPaperIds() {
  if (isNativeRuntime()) {
    const db = await getNativeDb();
    const result = await db.query(`SELECT payload FROM ${SUMMARY_STORE_NAME}`);

    return Array.from(
      new Set(
        (result.values ?? [])
          .map((row) => JSON.parse(row.payload as string) as LocalSummaryCache)
          .map((record) => record.paper_id)
          .filter((paperId): paperId is string => typeof paperId === "string" && paperId.length > 0)
      )
    );
  }

  const db = await getDb();
  const records = await db.getAll(SUMMARY_STORE_NAME);

  return Array.from(
    new Set(
      records
        .map((record) => (record.payload as LocalSummaryCache | undefined)?.paper_id)
        .filter((paperId): paperId is string => typeof paperId === "string" && paperId.length > 0)
    )
  );
}

export async function getCachedTermExplanation(
  paperId: string,
  keyword: string,
  model: string,
  promptVersion: string
): Promise<LocalTermExplanationCache | null> {
  if (isNativeRuntime()) {
    const db = await getNativeDb();
    const result = await db.query(
      `SELECT payload FROM ${TERM_STORE_NAME} WHERE cache_key = ? LIMIT 1`,
      [toCacheKey(`${paperId}::${keyword.toLowerCase()}`, model, promptVersion)]
    );

    if (!result.values?.length) {
      return null;
    }

    return JSON.parse(result.values[0].payload as string) as LocalTermExplanationCache;
  }

  const db = await getDb();
  const record = await db.get(
    TERM_STORE_NAME,
    toCacheKey(`${paperId}::${keyword.toLowerCase()}`, model, promptVersion)
  );
  return record ? (record.payload as LocalTermExplanationCache) : null;
}

export async function saveCachedTermExplanation(explanation: LocalTermExplanationCache) {
  if (isNativeRuntime()) {
    const db = await getNativeDb();
    await db.run(
      `INSERT OR REPLACE INTO ${TERM_STORE_NAME} (cache_key, payload) VALUES (?, ?)`,
      [
        toCacheKey(
          `${explanation.paper_id}::${explanation.keyword.toLowerCase()}`,
          explanation.model,
          explanation.prompt_version
        ),
        JSON.stringify(explanation)
      ],
      false
    );
    return;
  }

  const db = await getDb();
  await db.put(TERM_STORE_NAME, {
    cache_key: toCacheKey(
      `${explanation.paper_id}::${explanation.keyword.toLowerCase()}`,
      explanation.model,
      explanation.prompt_version
    ),
    payload: explanation
  });
}

export async function clearAllSummaries() {
  if (isNativeRuntime()) {
    const db = await getNativeDb();
    await db.execute(`DELETE FROM ${SUMMARY_STORE_NAME}; DELETE FROM ${TERM_STORE_NAME};`, false);
    return;
  }

  const db = await getDb();
  await db.clear(SUMMARY_STORE_NAME);
  await db.clear(TERM_STORE_NAME);
}
