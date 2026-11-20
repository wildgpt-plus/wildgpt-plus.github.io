---
title: "API 报错 context_length_exceeded 怎么办？缩短输入或新开会话"
description: "这不是额度用尽。先减少这次请求里的内容，或把长对话总结后换到新会话继续。"
date: "2026-11-20"
updated: "2026-11-20"
topic: "help"
category: "问题排查"
tags:
  - "context_length_exceeded"
  - "上下文窗口"
  - "OpenAI API 报错"
  - "Codex /compact"
  - "Codex /status"
  - "输入过长"
  - "token"
keywords:
  - "context_length_exceeded"
  - "上下文窗口"
  - "OpenAI API 报错"
  - "Codex /compact"
  - "Codex /status"
  - "输入过长"
  - "token"
slug: "openai-api-context-length-exceeded-fix"
canonical: "https://wildgpt.plus/zh/guides/openai-api-context-length-exceeded-fix/"
source_url: "https://wildgpt.plus/zh/guides/openai-api-context-length-exceeded-fix/"
layout: guide
permalink: /guides/openai-api-context-length-exceeded-fix/
---

这不是额度用尽。先减少这次请求里的内容，或把长对话总结后换到新会话继续。

## 要点

- context_length_exceeded 表示这一次输入超出了模型的上下文窗口，不是预付积分用尽。
- 先缩短输入；对话太长时，把关键信息做成更短的摘要，再开一个新会话继续。
- 在 Codex 里可用 /status 查看上下文用量，再用 /compact 压缩当前对话。

[阅读官网完整指南](https://wildgpt.plus/zh/guides/openai-api-context-length-exceeded-fix/?utm_source=github&utm_medium=referral&utm_campaign=knowledge_base)

套餐、价格和办理入口以 WildGPT 官网当前页面为准。
