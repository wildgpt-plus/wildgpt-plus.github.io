---
title: "API 报错 model_not_found 怎么办？先核对模型名和项目权限"
description: "先核对请求里的模型名和项目，再看这个模型对当前密钥是否可用，不要一上来就当成欠费。"
date: "2026-11-20"
updated: "2026-11-20"
topic: "help"
category: "问题排查"
tags:
  - "model_not_found"
  - "OpenAI API 404"
  - "模型不可用"
  - "resource_not_found"
  - "gpt-6.2"
  - "项目权限"
  - "API 报错"
keywords:
  - "model_not_found"
  - "OpenAI API 404"
  - "模型不可用"
  - "resource_not_found"
  - "gpt-6.2"
  - "项目权限"
  - "API 报错"
slug: "openai-api-model-not-found-fix"
canonical: "https://wildgpt.plus/zh/guides/openai-api-model-not-found-fix/"
source_url: "https://wildgpt.plus/zh/guides/openai-api-model-not-found-fix/"
layout: guide
permalink: /guides/openai-api-model-not-found-fix/
---

先核对请求里的模型名和项目，再看这个模型对当前密钥是否可用，不要一上来就当成欠费。

## 要点

- model_not_found 表示这个请求要找的模型或资源当前不可用，先核对模型 ID 和项目。
- 它不是密钥无效，也不是额度用尽；写错名称、用了已删除的模型，或密钥打到另一个项目，都会出现。
- 换用 GPT-6.2 时，模型名要以官方文档为准，并确认当前项目可以使用该模型。

[阅读官网完整指南](https://wildgpt.plus/zh/guides/openai-api-model-not-found-fix/?utm_source=github&utm_medium=referral&utm_campaign=knowledge_base)

套餐、价格和办理入口以 WildGPT 官网当前页面为准。
