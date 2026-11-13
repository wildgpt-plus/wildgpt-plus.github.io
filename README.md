# WildGPT 指南

GitHub Pages 上的 [WildGPT](https://wildgpt.plus/zh/) 公开指南摘要站。

- 在线地址：https://wildgpt-plus.github.io/
- 每篇文章都是官网原文的要点版，带关键词标签，并链回 `https://wildgpt.plus/zh/guides/<slug>/`
- 首页有通往 WildGPT 官网的开通入口

完整步骤、套餐价格和售后请以官网当前页面为准。

## 同步新文章

先准备一份已更新到最新 `main` 的 WildGPT 内容仓库本地副本（其中包含 `content/articles/<slug>.md`），然后在本仓库执行：

```bash
# 同步全部已发布文章
node scripts/sync-from-wildgpt.mjs --source /path/to/wildgpt

# 只同步指定文章
node scripts/sync-from-wildgpt.mjs --source /path/to/wildgpt --slugs slug-a,slug-b
```

脚本会写入：

- `knowledge/guides/<slug>.md` 摘要和标签
- `knowledge/README.md` 目录
- `_data/guides.json` 首页与列表数据

检查 diff 后提交并推送到 `main`，GitHub Pages 会自动构建。

```bash
npm run build:data    # 若只改了 Markdown、需要重建数据文件
git add knowledge _data
git commit -m "Add guide summaries for <slugs>"
git push origin main
```

推送使用 HTTPS。不要把访问令牌写进远程地址、git config 或仓库文件；用临时的 `GIT_ASKPASS` 助手即可。

## 本地说明

本站是 Jekyll 站点，由 GitHub Pages 从 `main` 分支的仓库根目录构建。`styles.css`、`_layouts` 和 `_includes` 控制外观；指南正文只放在 `knowledge/guides/`。
