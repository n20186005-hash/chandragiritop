# चन्द्रागिरि केबल कार माथिल्लो स्टेसन

Astro + Tailwind CSS + TypeScript 单景点站，目标部署 Cloudflare Workers。

## 环境

- Node.js 24.21.0（`.node-version` / `engines`）
- pnpm 12.4.2（`packageManager`）
- Astro 7.3.3
- TypeScript 6.0.3（避免 TypeScript 7 与 `astro check` 当前不兼容）

## 域名只配置一处

在构建环境中设置 `SITE_URL`，例如生产域名。`astro.config.mjs` 将其作为 Astro `site`；未设置时不会写入占位域名，sitemap 集成也不会启用。

```bash
SITE_URL="https://你的真实域名" pnpm build
```

## 安装、自检、构建

```bash
rm -rf node_modules
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## Cloudflare Workers

```bash
pnpm deploy
```

`wrangler.jsonc` 已提供 Worker 基础配置。

## 照片

页面使用真实的 Chandragiri 实景照片。当前源码保留权威/实景来源 URL，便于版权核验。若希望完全离线，请在有网络的构建环境中下载为 `public/images/` 本地文件并相应替换 `src/pages/index.astro` 的三个图片 URL；来源记录见 `public/IMAGE-CREDITS.md`。
