---
title: "Codex 更新后登录报 token_exchange_failed？换节点或用设备码登录，官方还给了 3 个备用办法"
description: "浏览器那头已经登录成功，令牌却没能换回客户端。问题多半出在网络这一段。"
date: "2026-11-12"
updated: "2026-11-12"
topic: "codex"
category: "Codex 指南"
tags:
  - "Codex登录失败"
  - "token_exchange_failed"
  - "Codex CLI登录"
  - "codex login"
  - "Codex设备码登录"
  - "auth.json"
  - "Codex登录"
  - "TUN模式"
keywords:
  - "Codex登录失败"
  - "token_exchange_failed"
  - "Codex CLI登录"
  - "codex login"
  - "Codex设备码登录"
  - "auth.json"
  - "Codex登录"
  - "TUN模式"
slug: "codex-login-token-exchange-failed-fix"
canonical: "https://wildgpt.plus/zh/guides/codex-login-token-exchange-failed-fix/"
source_url: "https://wildgpt.plus/zh/guides/codex-login-token-exchange-failed-fix/"
layout: guide
permalink: /guides/codex-login-token-exchange-failed-fix/
---

更新 Codex 之后，如果登录时报 token_exchange_failed，多半是浏览器这边已经登录成功，令牌却没能换回客户端，问题常出在网络。可以先换节点，或改用设备码登录；官方还说明了复制登录缓存、查看登录日志等备用办法。auth.json 里是访问令牌，不要发给别人，也不要提交到代码仓库。

## 要点

- 更新 Codex 后登录报 token_exchange_failed 时，先换节点或开 TUN 模式。
- 官方文档的备用办法：设备码登录、复制登录缓存、查看 codex-login.log。
- auth.json 里是访问令牌，别发给别人、别提交到仓库。

[阅读官网完整指南](https://wildgpt.plus/zh/guides/codex-login-token-exchange-failed-fix/?utm_source=github&utm_medium=referral&utm_campaign=knowledge_base)

套餐、价格和办理入口以 WildGPT 官网当前页面为准。
