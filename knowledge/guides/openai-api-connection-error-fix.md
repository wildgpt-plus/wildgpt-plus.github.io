---
title: "OpenAI API 报 Failed to connect / APIConnectionError 怎么办？"
description: "先分清是根本没连上，还是请求已经发出去但超时了，再检查代理、证书和防火墙。"
date: "2026-11-20"
updated: "2026-11-20"
topic: "help"
category: "问题排查"
tags:
  - "APIConnectionError"
  - "Failed to connect"
  - "APITimeoutError"
  - "OpenAI API 连不上"
  - "代理"
  - "SSL"
  - "status.openai.com"
keywords:
  - "APIConnectionError"
  - "Failed to connect"
  - "APITimeoutError"
  - "OpenAI API 连不上"
  - "代理"
  - "SSL"
  - "status.openai.com"
slug: "openai-api-connection-error-fix"
canonical: "https://wildgpt.plus/zh/guides/openai-api-connection-error-fix/"
source_url: "https://wildgpt.plus/zh/guides/openai-api-connection-error-fix/"
layout: guide
permalink: /guides/openai-api-connection-error-fix/
---

先分清是根本没连上，还是请求已经发出去但超时了，再检查代理、证书和防火墙。

## 要点

- APIConnectionError 表示连服务时就出了问题，先查网络、代理、SSL 证书和防火墙。
- APITimeoutError 是请求超时，先短暂等待再重试；不要把它当成额度用尽。
- 只在某一网络出现时，多半是代理或 TLS 检查拦住了连接，可用其他网络对比。

[阅读官网完整指南](https://wildgpt.plus/zh/guides/openai-api-connection-error-fix/?utm_source=github&utm_medium=referral&utm_campaign=knowledge_base)

套餐、价格和办理入口以 WildGPT 官网当前页面为准。
