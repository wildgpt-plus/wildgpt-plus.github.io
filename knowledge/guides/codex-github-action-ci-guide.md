---
title: "Codex 怎么接进 GitHub Actions？用 codex-action 自动审 PR，API Key 和费用这样管"
description: "在 CI 里跑 Codex，官方推荐用 codex-action，不要自己装 CLI 再把 API Key 塞进环境变量。费用走 API 账单，记得先设好上限。"
date: "2026-11-20"
updated: "2026-11-20"
topic: "codex"
category: "Codex 指南"
tags:
  - "Codex GitHub Actions"
  - "codex-action"
  - "codex exec"
  - "Codex自动代码审查"
  - "Codex CI"
  - "Codex API Key费用"
  - "OpenAI API Key安全"
keywords:
  - "Codex GitHub Actions"
  - "codex-action"
  - "codex exec"
  - "Codex自动代码审查"
  - "Codex CI"
  - "Codex API Key费用"
  - "OpenAI API Key安全"
slug: "codex-github-action-ci-guide"
canonical: "https://wildgpt.plus/zh/guides/codex-github-action-ci-guide/"
source_url: "https://wildgpt.plus/zh/guides/codex-github-action-ci-guide/"
layout: guide
permalink: /guides/codex-github-action-ci-guide/
---

在 CI 里跑 Codex，官方推荐用 codex-action，不要自己装 CLI 再把 API Key 塞进环境变量。费用走 API 账单，记得先设好上限。

## 要点

- 在 GitHub Actions 里跑 Codex，官方推荐 openai/codex-action@v1：它装好 CLI、起 API 代理，再按你给的权限运行 codex exec。
- 新工作流用 permission-profile 控制权限：只审代码用 :read-only，要改文件用 :workspace；保持默认的 drop-sudo。
- 用 API Key 跑的部分按 OpenAI Platform 的标准 API 价格计费，不占 ChatGPT 套餐额度；先在后台设好花费上限。

[阅读官网完整指南](https://wildgpt.plus/zh/guides/codex-github-action-ci-guide/?utm_source=github&utm_medium=referral&utm_campaign=knowledge_base)

套餐、价格和办理入口以 WildGPT 官网当前页面为准。
