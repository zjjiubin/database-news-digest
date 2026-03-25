"use client";

import { DEFAULT_SETTINGS } from "./constants";
import type { ModelSettings } from "../types";

const STORAGE_KEY = "papdoc-model-settings";

export function loadSettings(): ModelSettings {
  if (typeof window === "undefined") {
    return DEFAULT_SETTINGS;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return DEFAULT_SETTINGS;
  }

  try {
    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(settings: ModelSettings) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}
