"use client";

import { REMOTE_DATA_BASE_URL } from "./app-config";
import { requestJson } from "./network";
import type { DigestData, PaperRecord } from "../types";

async function readJson<T>(path: string): Promise<T> {
  return requestJson<T>(`${REMOTE_DATA_BASE_URL}${path}`);
}

export async function fetchDigestData() {
  return readJson<DigestData>("/latest.json");
}

export async function fetchPaperRecord(paperId: string) {
  return readJson<PaperRecord>(`/papers/${encodeURIComponent(paperId)}.json`);
}
