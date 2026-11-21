---
title: "Codex 怎么用 GPT-6.2？切换命令、config.toml 写法，以及 Astra 和 Sol 怎么分工"
description: "日常改代码用 gpt-6.2-sol，跨服务排查、要一口气做完并测好的活交给 gpt-6.2-astra。先更新客户端，再改模型。"
date: "2026-11-18"
updated: "2026-11-21"
topic: "codex"
category: "Codex 指南"
tags:
  - "Codex GPT-6.2"
  - "gpt-6.2-sol"
  - "gpt-6.2-astra"
  - "Codex切换模型"
  - "Codex config.toml"
  - "Codex Ultrafast"
  - "Codex模型怎么选"
keywords:
  - "Codex GPT-6.2"
  - "gpt-6.2-sol"
  - "gpt-6.2-astra"
  - "Codex切换模型"
  - "Codex config.toml"
  - "Codex Ultrafast"
  - "Codex模型怎么选"
slug: "codex-gpt-6-2-astra-sol-guide"
canonical: "https://wildgpt.plus/zh/guides/codex-gpt-6-2-astra-sol-guide/"
source_url: "https://wildgpt.plus/zh/guides/codex-gpt-6-2-astra-sol-guide/"
layout: guide
permalink: /guides/codex-gpt-6-2-astra-sol-guide/
---

日常改代码用 gpt-6.2-sol，跨服务排查、要一口气做完并测好的活交给 gpt-6.2-astra。先更新客户端，再改模型。

## 要点

- 先更新 ChatGPT 桌面 App 和 Codex CLI，再用 /model、codex -m gpt-6.2-sol 或 config.toml 切到 GPT-6.2。
- 日常改代码用 Sol，跨服务排查、改完还要测好的复杂改动交给 Astra；同样的 token，Astra 扣的额度是 Sol 的 4 倍。
- /fast 按 2 倍消耗额度；/ultrafast 只有 Pro 200（Sol）和 Pro 500（两者）能用，按 6 倍消耗。

[阅读官网完整指南](https://wildgpt.plus/zh/guides/codex-gpt-6-2-astra-sol-guide/?utm_source=github&utm_medium=referral&utm_campaign=knowledge_base)

套餐、价格和办理入口以 WildGPT 官网当前页面为准。
