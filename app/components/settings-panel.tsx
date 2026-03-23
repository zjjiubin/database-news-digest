"use client";

import { useEffect, useState } from "react";
import { DEFAULT_SETTINGS } from "../lib/constants";
import type { ModelSettings } from "../types";

type Props = {
  open: boolean;
  settings: ModelSettings;
  onSave: (settings: ModelSettings) => void;
  onClose: () => void;
  onTest: (settings: ModelSettings) => Promise<void>;
  onClearCache: () => Promise<void>;
};

export function SettingsPanel({ open, settings, onSave, onClose, onTest, onClearCache }: Props) {
  const [draft, setDraft] = useState<ModelSettings>(settings);
  const [testing, setTesting] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setDraft(settings);
  }, [settings]);

  if (!open) {
    return null;
  }

  return (
    <aside className="settings-panel">
      <div className="settings-header">
        <div>
          <p className="eyebrow">模型设置</p>
          <h2>本地配置</h2>
        </div>
        <button className="ghost-button" onClick={onClose} type="button">
          关闭
        </button>
      </div>

      <div className="settings-grid">
        <label>
          <span>Base URL</span>
          <input
            value={draft.baseUrl}
            onChange={(event) => setDraft({ ...draft, baseUrl: event.target.value })}
            placeholder="https://example.com/v1"
          />
        </label>
        <label>
          <span>API Key</span>
          <input
            type="password"
            value={draft.apiKey}
            onChange={(event) => setDraft({ ...draft, apiKey: event.target.value })}
            placeholder="sk-..."
          />
        </label>
        <label>
          <span>Digest Model</span>
          <input
            value={draft.digestModel}
            onChange={(event) => setDraft({ ...draft, digestModel: event.target.value })}
            placeholder="gpt-4.1-mini"
          />
        </label>
        <label>
          <span>Paper Summary Model</span>
          <input
            value={draft.paperSummaryModel}
            onChange={(event) => setDraft({ ...draft, paperSummaryModel: event.target.value })}
            placeholder="gpt-5"
          />
        </label>
        <label>
          <span>Temperature</span>
          <input
            type="number"
            min="0"
            max="2"
            step="0.1"
            value={draft.temperature}
            onChange={(event) =>
              setDraft({ ...draft, temperature: Number(event.target.value || DEFAULT_SETTINGS.temperature) })
            }
          />
        </label>
        <label>
          <span>Max Tokens</span>
          <input
            type="number"
            min="256"
            step="256"
            value={draft.maxTokens}
            onChange={(event) =>
              setDraft({ ...draft, maxTokens: Number(event.target.value || DEFAULT_SETTINGS.maxTokens) })
            }
          />
        </label>
        <label>
          <span>Timeout (秒)</span>
          <input
            type="number"
            min="15"
            step="5"
            value={draft.timeoutSeconds}
            onChange={(event) =>
              setDraft({
                ...draft,
                timeoutSeconds: Number(event.target.value || DEFAULT_SETTINGS.timeoutSeconds)
              })
            }
          />
        </label>
      </div>

      <div className="settings-actions">
        <button
          className="primary-button"
          type="button"
          onClick={() => {
            onSave(draft);
            setMessage("设置已保存在当前浏览器。");
          }}
        >
          保存设置
        </button>
        <button
          className="secondary-button"
          type="button"
          disabled={testing}
          onClick={async () => {
            setTesting(true);
            setMessage("");
            try {
              await onTest(draft);
              setMessage("模型连接测试成功。");
            } catch (error) {
              setMessage(error instanceof Error ? error.message : "连接测试失败。");
            } finally {
              setTesting(false);
            }
          }}
        >
          {testing ? "测试中..." : "测试连接"}
        </button>
        <button
          className="ghost-button"
          type="button"
          onClick={async () => {
            await onClearCache();
            setMessage("本地总结缓存已清空。");
          }}
        >
          清空本地缓存
        </button>
      </div>

      {message ? <p className="settings-message">{message}</p> : null}
    </aside>
  );
}
