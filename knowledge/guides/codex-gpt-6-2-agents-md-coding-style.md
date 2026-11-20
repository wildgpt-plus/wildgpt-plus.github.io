---
title: "GPT-6.2 在 Codex 里代码写得绕、爱加抽象、做一半就停？照官方指引配一份 AGENTS.md"
description: "官方给 GPT-6.2 准备了一组现成的提示词：复用已有逻辑、非必要不加测试、少做抽象、没做完别停。把它们写进 AGENTS.md，每个任务都会先读。"
date: "2026-11-20"
updated: "2026-11-20"
topic: "codex"
category: "Codex 指南"
tags:
  - "GPT-6.2 Codex提示词"
  - "Codex AGENTS.md模板"
  - "GPT-6.2过度抽象"
  - "Codex做一半就停"
  - "Codex代码风格"
  - "GPT-6.2写代码"
  - "AGENTS.md怎么写"
keywords:
  - "GPT-6.2 Codex提示词"
  - "Codex AGENTS.md模板"
  - "GPT-6.2过度抽象"
  - "Codex做一半就停"
  - "Codex代码风格"
  - "GPT-6.2写代码"
  - "AGENTS.md怎么写"
slug: "codex-gpt-6-2-agents-md-coding-style"
canonical: "https://wildgpt.plus/zh/guides/codex-gpt-6-2-agents-md-coding-style/"
source_url: "https://wildgpt.plus/zh/guides/codex-gpt-6-2-agents-md-coding-style/"
layout: guide
permalink: /guides/codex-gpt-6-2-agents-md-coding-style/
---

官方给 GPT-6.2 准备了一组现成的提示词：复用已有逻辑、非必要不加测试、少做抽象、没做完别停。把它们写进 AGENTS.md，每个任务都会先读。

## 要点

- GPT-6.2 默认就更简洁，意图不清时会先停下来等确认；与其骂它偷懒，不如把“做到什么算完、什么时候才该问”写清楚。
- 官方 Coding style 提示词的核心四条：复用已有逻辑、非必要不加测试、代码要可读、不做不必要的抽象。本文附中文版，可直接贴进 AGENTS.md。
- 通用习惯放 ~/.codex/AGENTS.md，项目环境、目录职责、测试规则和验证命令放仓库里的 AGENTS.md；写完让 Codex 复述一遍，确认真的读到了。

[阅读官网完整指南](https://wildgpt.plus/zh/guides/codex-gpt-6-2-agents-md-coding-style/?utm_source=github&utm_medium=referral&utm_campaign=knowledge_base)

套餐、价格和办理入口以 WildGPT 官网当前页面为准。
