---
title: "OpenAI API 速率限制怎么看、怎么提？RPM、TPM 和 Build、Launch、Grow 三档一次讲清"
description: "限流不是没钱。先在 Limits 页面看清自己是哪一档、撞的是哪个指标，再决定是放慢请求还是升级档位。"
date: "2026-11-21"
updated: "2026-11-21"
topic: "help"
category: "API 指南"
tags:
  - "OpenAI API速率限制"
  - "OpenAI usage tier"
  - "OpenAI API RPM TPM"
  - "OpenAI API限流"
  - "Rate limit reached"
  - "OpenAI API提额"
  - "x-ratelimit"
keywords:
  - "OpenAI API速率限制"
  - "OpenAI usage tier"
  - "OpenAI API RPM TPM"
  - "OpenAI API限流"
  - "Rate limit reached"
  - "OpenAI API提额"
  - "x-ratelimit"
slug: "openai-api-rate-limits-usage-tiers"
canonical: "https://wildgpt.plus/zh/guides/openai-api-rate-limits-usage-tiers/"
source_url: "https://wildgpt.plus/zh/guides/openai-api-rate-limits-usage-tiers/"
layout: guide
permalink: /guides/openai-api-rate-limits-usage-tiers/
---

限流不是没钱。先在 Limits 页面看清自己是哪一档、撞的是哪个指标，再决定是放慢请求还是升级档位。

## 要点

- 速率限制按组织和项目算，不按个人；常见指标是 RPM（每分钟请求数）和 TPM（每分钟 token 数），先撞到哪个算哪个。
- 付费档位分 Build、Launch、Grow，累计充值到 5、100、500 美元自动升级，在 Settings > Organization > Limits 查看。
- 撞了限流先按 Retry-After 等，没有就指数退避；余额用完、花费上限这类 429 重试没用。

[阅读官网完整指南](https://wildgpt.plus/zh/guides/openai-api-rate-limits-usage-tiers/?utm_source=github&utm_medium=referral&utm_campaign=knowledge_base)

套餐、价格和办理入口以 WildGPT 官网当前页面为准。
