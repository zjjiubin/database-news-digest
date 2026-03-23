"use client";

import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/legacy/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function normalizePdfText(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

export async function extractPdfText(file: File | ArrayBuffer) {
  const data = file instanceof File ? await file.arrayBuffer() : file;
  const pdf = await pdfjsLib.getDocument({ data }).promise;
  const pages: string[] = [];

  for (let pageIndex = 1; pageIndex <= pdf.numPages; pageIndex += 1) {
    const page = await pdf.getPage(pageIndex);
    const content = await page.getTextContent();
    const text = content.items
      .map((item) => ("str" in item ? item.str : ""))
      .join(" ");
    pages.push(normalizePdfText(text));
  }

  return pages.join("\n");
}
