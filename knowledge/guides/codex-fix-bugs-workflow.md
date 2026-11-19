---
title: "用 Codex 修 bug 怎么做？从复现问题、改代码到检查改动"
description: "先写清报错和复现步骤，再让 Codex 对着当前项目改。改之前先留 Git 检查点，改完只收下你确认过的 diff。"
date: "2026-11-19"
updated: "2026-11-19"
topic: "codex"
category: "Codex 指南"
tags:
  - "Codex 修 bug"
  - "Codex 怎么用"
  - "Codex 改代码"
  - "Codex 提示词"
  - "Codex 审查改动"
  - "AGENTS.md"
keywords:
  - "Codex 修 bug"
  - "Codex 怎么用"
  - "Codex 改代码"
  - "Codex 提示词"
  - "Codex 审查改动"
  - "AGENTS.md"
slug: "codex-fix-bugs-workflow"
canonical: "https://wildgpt.plus/zh/guides/codex-fix-bugs-workflow/"
source_url: "https://wildgpt.plus/zh/guides/codex-fix-bugs-workflow/"
layout: guide
permalink: /guides/codex-fix-bugs-workflow/
---

先写清报错和复现步骤，再让 Codex 对着当前项目改。改之前先留 Git 检查点，改完只收下你确认过的 diff。

## 要点

- 修 bug 前先写清报错原文、复现步骤、预期结果和实际结果，并打开相关文件，让 Codex 带着当前上下文开始。
- 动手改之前先建 Git 检查点；改完在同一侧边栏里看摘要和 diff，只留下你确认要的改动。
- 项目约定放到 AGENTS.md，需要时用 /review 检查改动，并用权限设置限制它能改文件、跑命令的范围。

[阅读官网完整指南](https://wildgpt.plus/zh/guides/codex-fix-bugs-workflow/?utm_source=github&utm_medium=referral&utm_campaign=knowledge_base)

套餐、价格和办理入口以 WildGPT 官网当前页面为准。
