"use client";

import { PROMPT_VERSION } from "./constants";
import type { ModelSettings, PaperRecord, SummarySections } from "../types";

const SYSTEM_PROMPT = `你是一名数据库论文阅读助手。请使用中文输出，并严格返回 JSON，不要输出 Markdown。输出字段必须是：
{
  "verdict": "一句话结论",
  "problem": "这篇论文解决什么问题",
  "method": "核心方法或系统设计",
  "experiments": "实验与结果",
  "dbImpact": "对存储引擎/查询优化/OLAP 的启发",
  "readingAdvice": "是否值得精读以及理由",
  "keywords": ["术语1", "术语2"]
}`;

async function postChatCompletion(settings: ModelSettings, body: Record<string, unknown>) {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), settings.timeoutSeconds * 1000);

  try {
    const response = await fetch(`${settings.baseUrl.replace(/\/$/, "")}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${settings.apiKey}`
      },
      body: JSON.stringify(body),
      signal: controller.signal
    });

    if (!response.ok) {
      throw new Error(`模型调用失败：${response.status}`);
    }

    return response.json();
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error("模型调用超时，请提高 timeoutSeconds 或检查接口速度。");
    }
    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }
}

function extractJson(content: string) {
  const match = content.match(/\{[\s\S]*\}/);
  if (!match) {
    throw new Error("模型返回中没有可解析的 JSON。");
  }
  return JSON.parse(match[0]) as SummarySections;
}

export async function testModelConnection(settings: ModelSettings) {
  return postChatCompletion(settings, {
      model: settings.digestModel || settings.paperSummaryModel,
      temperature: 0,
      max_tokens: 40,
      messages: [
        {
          role: "user",
          content: "请只回复 OK"
        }
      ]
  });
}

export async function generatePaperSummary(
  settings: ModelSettings,
  paper: PaperRecord,
  pdfText: string
) {
  const clippedText = pdfText.slice(0, 120_000);
  const payload = await postChatCompletion(settings, {
      model: settings.paperSummaryModel,
      temperature: settings.temperature,
      max_tokens: settings.maxTokens,
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT
        },
        {
          role: "user",
          content: `请基于下面的数据库论文全文内容做总结。论文标题：${paper.title}\n来源：${paper.source}\n分类：${paper.category_titles.join("、")}\n\n全文内容：\n${clippedText}`
        }
      ]
  });
  const content = payload.choices?.[0]?.message?.content ?? "";

  return {
    paper_id: paper.id,
    model: settings.paperSummaryModel,
    prompt_version: PROMPT_VERSION,
    source_kind: "pdf" as const,
    generated_at: new Date().toISOString(),
    summary_sections: extractJson(content)
  };
}
