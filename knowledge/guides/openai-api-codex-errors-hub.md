---
title: "OpenAI API 和 Codex 报错怎么查？先看错误码再处理"
description: "先读错误码或报错原文，再打开对应指南。限流可以按 Retry-After 再试，余额和花费上限要先改账单设置。"
date: "2026-11-20"
updated: "2026-11-20"
topic: "help"
category: "问题排查"
tags:
  - "OpenAI API 报错"
  - "Codex 报错"
  - "429"
  - "insufficient_quota"
  - "credit_balance_exhausted"
  - "token_exchange_failed"
  - "内容无法显示"
keywords:
  - "OpenAI API 报错"
  - "Codex 报错"
  - "429"
  - "insufficient_quota"
  - "credit_balance_exhausted"
  - "token_exchange_failed"
  - "内容无法显示"
slug: "openai-api-codex-errors-hub"
canonical: "https://wildgpt.plus/zh/guides/openai-api-codex-errors-hub/"
source_url: "https://wildgpt.plus/zh/guides/openai-api-codex-errors-hub/"
layout: guide
permalink: /guides/openai-api-codex-errors-hub/
---

先读错误码或报错原文，再打开对应指南。限流可以按 Retry-After 再试，余额和花费上限要先改账单设置。

## 要点

- 先打开 status.openai.com，再看返回里的 error.code 或屏幕上的报错原文，不要只看 HTTP 状态码。
- 429 可能是请求太快，也可能是积分用尽或花费上限；后两类不能靠重试恢复。
- Codex 登录失败、内容无法显示、桌面版卡顿和流式中断，分别走对应的专门指南。

[阅读官网完整指南](https://wildgpt.plus/zh/guides/openai-api-codex-errors-hub/?utm_source=github&utm_medium=referral&utm_campaign=knowledge_base)

套餐、价格和办理入口以 WildGPT 官网当前页面为准。
