---
title: "Codex 的 AGENTS.md 怎么写？放在哪、怎么生效、写什么最管用"
description: "每次开 Codex 都要重复一遍“先跑测试、别乱加依赖”？把这些话写进 AGENTS.md，它每次开工前都会先读。"
date: "2026-11-18"
updated: "2026-11-18"
topic: "codex"
category: "Codex 指南"
tags:
  - "AGENTS.md"
  - "Codex AGENTS.md"
  - "AGENTS.md怎么写"
  - "Codex教程"
  - "Codex自定义指令"
  - "Codex项目规则"
  - "Codex init"
  - "Codex配置"
keywords:
  - "AGENTS.md"
  - "Codex AGENTS.md"
  - "AGENTS.md怎么写"
  - "Codex教程"
  - "Codex自定义指令"
  - "Codex项目规则"
  - "Codex init"
  - "Codex配置"
slug: "codex-agents-md-guide"
canonical: "https://wildgpt.plus/zh/guides/codex-agents-md-guide/"
source_url: "https://wildgpt.plus/zh/guides/codex-agents-md-guide/"
layout: guide
permalink: /guides/codex-agents-md-guide/
---

每次开 Codex 都要重复一遍“先跑测试、别乱加依赖”？把这些话写进 AGENTS.md，它每次开工前都会先读。

## 要点

- 全局规则放 ~/.codex/AGENTS.md，项目规则放仓库根目录，子目录可以再放一份；越靠近你启动 Codex 的目录，优先级越高。
- AGENTS.override.md 会顶替同一目录的 AGENTS.md，适合临时改规则；所有文件合起来默认最多 32 KiB，超了就被截断。
- 最省事的起步是 /init 生成草稿，再改成自己的测试命令和约定；写完用一条命令让 Codex 复述，确认真的读到了。

[阅读官网完整指南](https://wildgpt.plus/zh/guides/codex-agents-md-guide/?utm_source=github&utm_medium=referral&utm_campaign=knowledge_base)

套餐、价格和办理入口以 WildGPT 官网当前页面为准。
