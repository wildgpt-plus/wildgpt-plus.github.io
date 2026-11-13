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

更新 Codex 后登录可能报 Error code token_exchange_failed，详情为请求 https://auth.openai.com/oauth/token 发送失败。常见解决办法是换一个干净的网络节点或开 TUN 模式，因为鉴权回到客户端时可能走了原生网络。官方认证文档还提供备用办法：本地网络阻断 localhost 回调时优先使用设备码登录（beta，需在 ChatGPT 安全设置中开启，codex login --device-auth）；也可在能用浏览器的机器登录后复制 ~/.codex/auth.json；直接运行 codex login 会写入 codex-login.log 便于排查；codex login status 查看当前认证方式；企业 TLS 代理可设置 CODEX_CA_CERTIFICATE；auth.json 含访问令牌，须像密码一样保管。

## 要点

- 更新 Codex 后登录报 token_exchange_failed 时，先换节点或开 TUN 模式。
- 官方文档的备用办法：设备码登录、复制登录缓存、查看 codex-login.log。
- auth.json 里是访问令牌，别发给别人、别提交到仓库。

[阅读官网完整指南](https://wildgpt.plus/zh/guides/codex-login-token-exchange-failed-fix/?utm_source=github&utm_medium=referral&utm_campaign=knowledge_base)

套餐、价格和办理入口以 WildGPT 官网当前页面为准。
