# WildGPT 使用指南

面向 ChatGPT Plus / Pro 用户的套餐选择、使用方法和问题排查摘要。WildGPT 支持支付宝、微信付款，直充本人账户，订单进度可查。

这里只收录要点摘要；完整说明、最新规则和办理入口请查看 [WildGPT 官网](https://wildgpt.plus/zh/?utm_source=github&utm_medium=referral&utm_campaign=knowledge_base)。

## 文章目录

- [Codex 怎么用 GPT-6.2？切换命令、config.toml 写法，以及 Astra 和 Sol 怎么分工](guides/codex-gpt-6-2-astra-sol-guide.md)
- [Codex 怎么接 MCP 服务器？CLI、桌面版、IDE 三种加法和 config.toml 写法](guides/codex-mcp-server-setup.md)
- [Codex 连不上、流式中断？先检查 WebSocket 和代理](guides/codex-websocket-streaming-blocked-fix.md)
- [OpenAI API 速率限制怎么看、怎么提？RPM、TPM 和 Build、Launch、Grow 三档一次讲清](guides/openai-api-rate-limits-usage-tiers.md)
- [Codex CLI 0.171.0 更新了什么？GPT-6.2 Sol 成默认选项，终端工作区默认打开](guides/codex-cli-0-171-gpt-6-2-sol-default.md)
- [Codex CLI 终端工作区怎么开：tui_workspace 分屏侧边对话、多标签、搜旧任务和 GIF 生成上手](guides/codex-cli-tui-workspace-side-chat-tabs.md)
- [Codex 入门到进阶：安装、IDE、权限和 AGENTS.md](guides/codex-getting-started-hub.md)
- [Codex 怎么接进 GitHub Actions？用 codex-action 自动审 PR，API Key 和费用这样管](guides/codex-github-action-ci-guide.md)
- [GPT-6.2 在 Codex 里代码写得绕、爱加抽象、做一半就停？照官方指引配一份 AGENTS.md](guides/codex-gpt-6-2-agents-md-coding-style.md)
- [用 Codex 查程序变慢怎么做？照 OpenAI Performance Factory 的思路排查性能回归](guides/codex-performance-regression-workflow.md)
- [OpenAI API 和 Codex 报错怎么查？先看错误码再处理](guides/openai-api-codex-errors-hub.md)
- [OpenAI API 报 Failed to connect / APIConnectionError 怎么办？](guides/openai-api-connection-error-fix.md)
- [API 报错 context_length_exceeded 怎么办？缩短输入或新开会话](guides/openai-api-context-length-exceeded-fix.md)
- [OpenAI API credit_balance_exhausted 怎么办？余额与预算排查](guides/openai-api-credit-balance-exhausted-fix.md)
- [API 报错 model_not_found 怎么办？先核对模型名和项目权限](guides/openai-api-model-not-found-fix.md)
- [API Key 别随手卖：免费额度用不完，也别把账号交出去](guides/api-key-not-a-coupon-resell-rules.md)
- [ChatGPT 桌面版 Chat 和 Work 要合并？合并后怎么用，Codex 还独立吗](guides/chatgpt-chat-work-tabs-merge.md)
- [ChatGPT Finances 国内能用吗？美国可连银行，缺的是地区支持](guides/chatgpt-finances-us-what-chinese-users-miss.md)
- [ChatGPT Go 和 Plus 做图差在哪？“先思考再出图”只给 Plus](guides/chatgpt-go-vs-plus-images-2-6.md)
- [GPT-6.1 Terra 怎么在 Work 和 Codex 里用？Plus、Pro 入口和限制](guides/chatgpt-gpt-6-1-terra-work-codex.md)
- [经常给 ChatGPT 传合同和客户资料？先看懂 Lockdown Mode 再开关](guides/chatgpt-lockdown-mode-when-to-enable.md)
- [ChatGPT 发不出消息、一直报错？先分清是官方故障还是自己的问题](guides/chatgpt-paid-plans-errors-nov-4.md)
- [ChatGPT 能帮你看实验图了吗？BioBasicsBench 揭示的能力与短板](guides/chatgpt-pro-astra-wet-lab-benchmark.md)
- [Codex 的 AGENTS.md 怎么写？放在哪、怎么生效、写什么最管用](guides/codex-agents-md-guide.md)
- [Codex CLI 0.167 两个实用更新：系统代理可选开启，切后端不丢草稿](guides/codex-cli-0-167-proxy-for-china.md)
- [Codex CLI 0.170.0 更新了什么？终端里可用 /voice 实时语音通话](guides/codex-cli-0-170-voice-tui.md)
- [Codex 提示内容无法显示、被安全检查拦住了？先收窄问题，再检查 AGENTS.md](guides/codex-content-cant-be-shown-fix.md)
- [用 Codex 修 bug 怎么做？从复现问题、改代码到检查改动](guides/codex-fix-bugs-workflow.md)
- [Codex 权限怎么选？Ask for approval、Approve for me 和 Full access 有什么区别](guides/codex-permission-modes-ask-approve-full-access.md)
- [Codex 沙箱和 permission profiles 怎么配？别和旧的 sandbox_mode 混用](guides/codex-permission-profiles-sandbox.md)
- [在 VS Code 和 Cursor 里怎么用 Codex？安装插件、登录和开始写代码](guides/codex-vscode-cursor-ide-guide.md)
- [Cursor、GitHub Copilot 和 OpenAI Codex 怎么选？](guides/cursor-copilot-codex-comparison.md)
- [做短视频还是做 GIF？Gemini Omni 1.2 和 ChatGPT Images 2.6 怎么选](guides/gemini-omni-vs-chatgpt-images.md)
- [GPT-6.2 API 价格怎么算？Astra、Sol 每百万 token 费用、缓存、长上下文和省钱档位一览](guides/gpt-6-2-api-pricing.md)
- [GPT-6 Cyber 是什么？Daybreak 准入、API 定价和普通用户能不能用](guides/gpt-6-cyber-daybreak-pricing.md)
- [OpenAI 到账 110 亿美元、估值 1.25 万亿：对每月付费用 ChatGPT 的人意味着什么](guides/openai-11b-funding-1-25-trillion.md)
- [OpenAI API 付款失败怎么办？开发者信用卡被拒、预付加额不成功](guides/openai-api-billing-payment-failed.md)
- [如何取消 OpenAI API 自动扣费？关闭自动充值、设置花费上限，以及取消 ChatGPT 后 API 和 Codex 还能不能用](guides/openai-api-cancel-auto-recharge-usage-limits.md)
- [OpenAI API 429 怎么办？insufficient_quota、限流和额度用尽怎么分](guides/openai-api-error-codes-fix.md)
- [OpenAI API Key 怎么获取？国内怎么开通并购买预付费额度](guides/openai-api-signup-prepaid-credit.md)
- [团队怎么给 OpenAI API 加额？组织账单、成员权限和花费上限](guides/openai-api-team-organization-billing.md)
- [Pro 送的 API 额度能在 Codex 里用吗？官方写明不支持，这些用途才划算](guides/chatgpt-pro-api-credits-codex.md)
- [Codex 桌面版卡顿、会话加载慢怎么办？按这个顺序排查，先别急着重装](guides/codex-app-slow-freezing-fix.md)
- [Codex 更新后登录报 token_exchange_failed？换节点或用设备码登录，官方还给了 3 个备用办法](guides/codex-login-token-exchange-failed-fix.md)
- [接口升级到 GPT-6.2 要改什么？模型名、推理强度、工具调用和缓存参数的迁移清单](guides/gpt-6-2-api-migration-guide.md)
- [Codex 怎么安装和登录？CLI、IDE 插件和 ChatGPT 桌面版一次讲清](guides/codex-install-and-sign-in-guide.md)
- [OpenAI 开了科学博客：GPT-6 Astra 帮物理学家给标准模型找到格点定义候选方案](guides/openai-science-blog-gpt-6-astra-standard-model.md)
- [OpenAI 推出 Daybreak Red Team 和 Defense Factory：普通开发者现在能用的是 Codex 安全审查](guides/codex-security-review-daybreak-defense-factory.md)
- [ChatGPT 连不上 Outlook、SharePoint？11 月 13 日凌晨起微软连接器报错，官方已于 11 月 14 日 08:18 标记恢复](guides/chatgpt-microsoft-365-connector-errors.md)
- [ChatGPT 回答太啰嗦？程序员这样设置个性化：选对基础风格、调低热情和表情，再加一段自定义指令](guides/chatgpt-personalization-for-programmers.md)
- [Codex CLI 0.169.0 更新：codex exec 在未信任目录不再加载项目配置，脚本记得加 --trust](guides/codex-cli-0-169-exec-trust-custom-provider.md)
- [OpenAI 解散独立机器人团队：改用 GPT-6 Astra 这类通用模型直接控制机器人](guides/openai-disbands-robotics-team-gpt-6-astra.md)
- [4 家非营利组织起诉 OpenAI 等 5 家公司，要求冻结前沿 AI：ChatGPT 会被叫停吗？](guides/openai-lawsuit-freeze-frontier-ai.md)
- [2 万名美国退伍军人用 ChatGPT Plus 转行：他们的 4 个做法，换工作的人都能照抄](guides/chatgpt-career-switch-veterans-playbook.md)
- [OpenAI 公开内部“急停系统” Control Room：35 秒内叫停任何一个模型任务，它是怎么做到的](guides/openai-control-room-35-second-stop.md)
- [周末想做个 AI 小应用？OpenAI Developers 插件新增 Showcase，示例项目一键在 Codex 里打开](guides/openai-developers-showcase-codex-starter.md)
- [OpenAI 请外部安全团队专测“第三方连接”：给 ChatGPT 连了邮箱和网盘的人，花 5 分钟查这 4 处](guides/openai-hacktron-connected-apps-check.md)

## 内容与反馈

本库只包含公开教程摘要，不收集账户登录信息、付款凭证或订单详情。订单问题请通过官网客服处理，不要在公开 Issue 中提交个人资料。

订阅期内有售后质保：遇到问题可带上订单号，联系官网客服。
