"use client";

import { PROMPT_VERSION, TERM_EXPLANATION_PROMPT_VERSION } from "./constants";
import { requestJson } from "./network";
import type { ModelSettings, PaperRecord, SummarySections, TermExplanationSections } from "../types";

type ChatCompletionResponse = {
  choices?: Array<{
    message?: {
      content?: unknown;
    };
  }>;
};

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

const TERM_SYSTEM_PROMPT = `你是一名数据库论文术语讲解助手。请只在数据库科学和数据库系统语境内解释术语，并严格返回 JSON，不要输出 Markdown。输出字段必须是：
{
  "term": "术语原文",
  "definition": "在数据库科学范畴内的简明解释",
  "paperContext": "这个术语在当前论文里具体指什么、出现在哪个设计或实验语境中",
  "whyItMatters": "为什么这个术语对理解这篇论文重要"
}`;

async function postChatCompletion(settings: ModelSettings, body: Record<string, unknown>) {
  return requestJson<ChatCompletionResponse>(
    `${settings.baseUrl.replace(/\/$/, "")}/chat/completions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${settings.apiKey}`
      },
      body,
      timeoutSeconds: settings.timeoutSeconds
    }
  );
}

function normalizeAssistantContent(content: unknown): string {
  if (typeof content === "string") {
    return content;
  }

  if (Array.isArray(content)) {
    return content
      .map((item) => {
        if (typeof item === "string") {
          return item;
        }
        if (item && typeof item === "object" && "text" in item && typeof item.text === "string") {
          return item.text;
        }
        return "";
      })
      .join("\n");
  }

  return "";
}

function extractJson(content: string) {
  const match = content.match(/\{[\s\S]*\}/);
  if (!match) {
    throw new Error(`模型返回中没有可解析的 JSON。原始返回片段：${content.slice(0, 300) || "空响应"}`);
  }

  try {
    return JSON.parse(match[0]) as SummarySections;
  } catch (error) {
    throw new Error(
      `模型返回的 JSON 解析失败：${error instanceof Error ? error.message : "未知错误"}`
    );
  }
}

function extractTermJson(content: string) {
  const match = content.match(/\{[\s\S]*\}/);
  if (!match) {
    throw new Error(`术语解释返回中没有可解析的 JSON。原始返回片段：${content.slice(0, 300) || "空响应"}`);
  }

  try {
    return JSON.parse(match[0]) as TermExplanationSections;
  } catch (error) {
    throw new Error(
      `术语解释 JSON 解析失败：${error instanceof Error ? error.message : "未知错误"}`
    );
  }
}

export async function testModelConnection(settings: ModelSettings) {
  if (!settings.baseUrl || !settings.apiKey || (!settings.digestModel && !settings.paperSummaryModel)) {
    throw new Error("请先填写 Base URL、API Key 和至少一个模型名。");
  }

  await postChatCompletion(settings, {
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
  const content = normalizeAssistantContent(payload.choices?.[0]?.message?.content);

  return {
    paper_id: paper.id,
    model: settings.paperSummaryModel,
    prompt_version: PROMPT_VERSION,
    source_kind: "pdf" as const,
    generated_at: new Date().toISOString(),
    summary_sections: extractJson(content)
  };
}

export async function generateTermExplanation(
  settings: ModelSettings,
  paper: PaperRecord,
  keyword: string,
  paperText: string
) {
  const clippedText = paperText.slice(0, 80_000);
  const payload = await postChatCompletion(settings, {
    model: settings.paperSummaryModel,
    temperature: settings.temperature,
    max_tokens: Math.min(settings.maxTokens, 1800),
    messages: [
      {
        role: "system",
        content: TERM_SYSTEM_PROMPT
      },
      {
        role: "user",
        content:
          `请解释数据库术语“${keyword}”。` +
          `\n论文标题：${paper.title}` +
          `\n来源：${paper.source}` +
          `\n分类：${paper.category_titles.join("、")}` +
          `\n请重点结合这篇论文中的实际使用语境，不要泛泛而谈。` +
          `\n\n论文全文：\n${clippedText}`
      }
    ]
  });

  const content = normalizeAssistantContent(payload.choices?.[0]?.message?.content);

  return {
    paper_id: paper.id,
    keyword,
    model: settings.paperSummaryModel,
    prompt_version: TERM_EXPLANATION_PROMPT_VERSION,
    generated_at: new Date().toISOString(),
    explanation_sections: extractTermJson(content)
  };
}
