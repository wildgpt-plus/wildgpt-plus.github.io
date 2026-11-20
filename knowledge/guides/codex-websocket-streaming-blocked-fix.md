---
title: "Codex 连不上、流式中断？先检查 WebSocket 和代理"
description: "先确认不是服务故障，再检查代理、防火墙和 TLS 检查有没有拦住 WebSocket 长连接。"
date: "2026-11-20"
updated: "2026-11-20"
topic: "codex"
category: "问题排查"
tags:
  - "Codex WebSocket"
  - "Codex 流式中断"
  - "wss://chatgpt.com"
  - "代理"
  - "防火墙"
  - "TLS 检查"
  - "status.openai.com"
keywords:
  - "Codex WebSocket"
  - "Codex 流式中断"
  - "wss://chatgpt.com"
  - "代理"
  - "防火墙"
  - "TLS 检查"
  - "status.openai.com"
slug: "codex-websocket-streaming-blocked-fix"
canonical: "https://wildgpt.plus/zh/guides/codex-websocket-streaming-blocked-fix/"
source_url: "https://wildgpt.plus/zh/guides/codex-websocket-streaming-blocked-fix/"
layout: guide
permalink: /guides/codex-websocket-streaming-blocked-fix/
---

先确认不是服务故障，再检查代理、防火墙和 TLS 检查有没有拦住 WebSocket 长连接。

## 要点

- Codex 的模型采样和流式更新走 WebSocket，需要在 TCP 443 放行 Upgrade: websocket。
- 官方列出的 Codex 目的地址是 wss://chatgpt.com/；TLS 检查或空闲超时可能导致连上后中途断开。
- Responses API 的 WebSocket 模式如果提示 60 分钟限制，需要新开一条连接再继续。

[阅读官网完整指南](https://wildgpt.plus/zh/guides/codex-websocket-streaming-blocked-fix/?utm_source=github&utm_medium=referral&utm_campaign=knowledge_base)

套餐、价格和办理入口以 WildGPT 官网当前页面为准。
