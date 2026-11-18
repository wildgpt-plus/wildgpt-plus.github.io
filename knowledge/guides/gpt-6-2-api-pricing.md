---
title: "GPT-6.2 API 价格怎么算？Astra、Sol 每百万 token 费用、缓存、长上下文和省钱档位一览"
description: "Astra 输入输出比 GPT-6 Astra 便宜 20%，缓存读取便宜 60%；Sol 沿用 GPT-6.1 Sol 的价格。真正决定账单的，是缓存命中率和你选的处理档位。"
date: "2026-11-18"
updated: "2026-11-18"
topic: "help"
category: "API 指南"
tags:
  - "GPT-6.2 API价格"
  - "gpt-6.2-astra价格"
  - "gpt-6.2-sol价格"
  - "OpenAI API价格"
  - "OpenAI缓存计费"
  - "Batch API价格"
  - "OpenAI后台模式折扣"
keywords:
  - "GPT-6.2 API价格"
  - "gpt-6.2-astra价格"
  - "gpt-6.2-sol价格"
  - "OpenAI API价格"
  - "OpenAI缓存计费"
  - "Batch API价格"
  - "OpenAI后台模式折扣"
slug: "gpt-6-2-api-pricing"
canonical: "https://wildgpt.plus/zh/guides/gpt-6-2-api-pricing/"
source_url: "https://wildgpt.plus/zh/guides/gpt-6-2-api-pricing/"
layout: guide
permalink: /guides/gpt-6-2-api-pricing/
---

Astra 输入输出比 GPT-6 Astra 便宜 20%，缓存读取便宜 60%；Sol 沿用 GPT-6.1 Sol 的价格。真正决定账单的，是缓存命中率和你选的处理档位。

## 要点

- gpt-6.2-astra：输入 8 美元、缓存输入 0.40、输出 40（每百万 token）；gpt-6.2-sol：2、0.10、10。
- 缓存读取只要普通输入的 0.05 倍，但写入要 1.25 倍；固定前缀反复用，缓存才划算。输入超过 272K，整次请求按长上下文计价。
- 不急的任务用 Batch（5 折）或后台 8 小时窗口（低 40%）；Fast 2 倍、Ultrafast 现阶段 3 倍，按需再开。

[阅读官网完整指南](https://wildgpt.plus/zh/guides/gpt-6-2-api-pricing/?utm_source=github&utm_medium=referral&utm_campaign=knowledge_base)

套餐、价格和办理入口以 WildGPT 官网当前页面为准。
