"use client";

import { Capacitor, CapacitorHttp } from "@capacitor/core";

type JsonRequestOptions = {
  method?: "GET" | "POST";
  headers?: Record<string, string>;
  body?: Record<string, unknown>;
  timeoutSeconds?: number;
};

function isNativeRuntime() {
  return Capacitor.isNativePlatform();
}

function decodeBase64ToArrayBuffer(base64: string) {
  const binary = window.atob(base64.replace(/\s+/g, ""));
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return bytes.buffer;
}

function toErrorMessage(status: number, data: unknown, fallback: string) {
  if (typeof data === "string" && data.trim()) {
    return `${fallback}：${status} ${data.trim().slice(0, 300)}`;
  }

  if (data && typeof data === "object") {
    const values = ["error", "message", "detail"]
      .map((key) => (data as Record<string, unknown>)[key])
      .filter((value): value is string => typeof value === "string" && value.trim().length > 0);

    if (values.length > 0) {
      return `${fallback}：${status} ${values[0].trim()}`;
    }
  }

  return `${fallback}：${status}`;
}

export async function requestJson<T>(url: string, options: JsonRequestOptions = {}): Promise<T> {
  const method = options.method ?? "GET";
  const timeoutMs = (options.timeoutSeconds ?? 90) * 1000;

  if (isNativeRuntime()) {
    const response = await CapacitorHttp.request({
      url,
      method,
      headers: options.headers,
      data: options.body,
      responseType: "json",
      connectTimeout: timeoutMs,
      readTimeout: timeoutMs
    });

    if (response.status < 200 || response.status >= 300) {
      throw new Error(toErrorMessage(response.status, response.data, "请求失败"));
    }

    return response.data as T;
  }

  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      method,
      headers: options.headers,
      body: options.body ? JSON.stringify(options.body) : undefined,
      cache: "no-store",
      signal: controller.signal
    });

    const contentType = response.headers.get("content-type") || "";
    const data = contentType.includes("application/json")
      ? ((await response.json()) as unknown)
      : ((await response.text()) as unknown);

    if (!response.ok) {
      throw new Error(toErrorMessage(response.status, data, "请求失败"));
    }

    return data as T;
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error("请求超时，请检查网络或调大 timeoutSeconds。");
    }
    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }
}

export async function requestArrayBuffer(url: string, timeoutSeconds = 90) {
  const timeoutMs = timeoutSeconds * 1000;

  if (isNativeRuntime()) {
    const response = await CapacitorHttp.get({
      url,
      responseType: "arraybuffer",
      connectTimeout: timeoutMs,
      readTimeout: timeoutMs
    });

    if (response.status < 200 || response.status >= 300) {
      throw new Error(toErrorMessage(response.status, response.data, "PDF 下载失败"));
    }

    if (typeof response.data !== "string") {
      throw new Error("PDF 下载失败：原生网络层没有返回可解析的二进制数据。");
    }

    return decodeBase64ToArrayBuffer(response.data);
  }

  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      cache: "no-store",
      signal: controller.signal
    });

    if (!response.ok) {
      throw new Error(`PDF 下载失败：${response.status}`);
    }

    return response.arrayBuffer();
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error("PDF 下载超时，请检查网络后重试。");
    }
    if (error instanceof TypeError) {
      throw new Error("当前链接无法直接下载 PDF，可能是站点跨域限制。请改用上传 PDF。");
    }
    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }
}
