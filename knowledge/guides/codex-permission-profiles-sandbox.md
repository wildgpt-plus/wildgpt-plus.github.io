---
title: "Codex 沙箱和 permission profiles 怎么配？别和旧的 sandbox_mode 混用"
description: "新的 permission profiles 和旧的 sandbox_mode 不能一起写。先分清沙箱边界和审批策略，再按官方示例改 config.toml。"
date: "2026-11-19"
updated: "2026-11-19"
topic: "codex"
category: "Codex 指南"
tags:
  - "Codex permission profiles"
  - "Codex沙箱"
  - "Codex sandbox"
  - "default_permissions"
  - "sandbox_mode"
  - "Codex权限配置"
  - "Codex教程"
  - "config.toml"
keywords:
  - "Codex permission profiles"
  - "Codex沙箱"
  - "Codex sandbox"
  - "default_permissions"
  - "sandbox_mode"
  - "Codex权限配置"
  - "Codex教程"
  - "config.toml"
slug: "codex-permission-profiles-sandbox"
canonical: "https://wildgpt.plus/zh/guides/codex-permission-profiles-sandbox/"
source_url: "https://wildgpt.plus/zh/guides/codex-permission-profiles-sandbox/"
layout: guide
permalink: /guides/codex-permission-profiles-sandbox/
---

新的 permission profiles 和旧的 sandbox_mode 不能一起写。先分清沙箱边界和审批策略，再按官方示例改 config.toml。

## 要点

- 沙箱规定命令能读写哪里、能不能上网；审批策略决定越过这条边界前要不要停下来问你。这两套控制不要当成同一个开关。
- permission profiles 还是 beta。只使用 default_permissions 和 [permissions]，不要和旧的 sandbox_mode 写在一起，否则会退回旧设置。
- 常用起点是内置的 :workspace；需要更细的文件系统和网络规则时，按官方的 project-edit、workspace-net 示例改 config.toml。

[阅读官网完整指南](https://wildgpt.plus/zh/guides/codex-permission-profiles-sandbox/?utm_source=github&utm_medium=referral&utm_campaign=knowledge_base)

套餐、价格和办理入口以 WildGPT 官网当前页面为准。
