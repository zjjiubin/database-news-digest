export type PaperRecord = {
  id: string;
  title: string;
  authors: string[];
  source: string;
  published: string;
  categories: string[];
  category_titles: string[];
  score: number;
  importance_reason: string;
  paper_url: string;
  pdf_url: string;
  doi: string;
  abstract: string;
  summary_status: string;
};

export type DigestData = {
  generated_at: string;
  total_papers: number;
  source_summary: Record<string, number>;
  top_pick_ids: string[];
  categories: Record<string, { title: string; paper_ids: string[] }>;
  papers: PaperRecord[];
};

export type ModelSettings = {
  baseUrl: string;
  apiKey: string;
  digestModel: string;
  paperSummaryModel: string;
  temperature: number;
  maxTokens: number;
  timeoutSeconds: number;
};

export type SummarySections = {
  verdict: string;
  problem: string;
  method: string;
  experiments: string;
  dbImpact: string;
  readingAdvice: string;
  keywords: string[];
};

export type LocalSummaryCache = {
  paper_id: string;
  model: string;
  prompt_version: string;
  source_kind: "pdf";
  generated_at: string;
  summary_sections: SummarySections;
};

export type UploadFallbackState = {
  paper_id: string;
  pdf_required: boolean;
  upload_status: "idle" | "ready" | "processing" | "failed";
};
