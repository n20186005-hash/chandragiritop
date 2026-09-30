# चन्द्रागिरि केबल कार माथिल्लो स्टेसन

Astro + Tailwind CSS + TypeScript 单景点站，目标部署 Cloudflare Workers。

## 环境

- Node.js 24.21.0（`.node-version` / `engines`）
- pnpm 12.4.2（`packageManager`）
- Astro 7.3.3
- TypeScript 6.0.3（避免 TypeScript 7 与 `astro check` 当前不兼容）

## 域名只配置一处

`astro.config.mjs` 的 Astro `site` 默认硬编码为 `https://chandragiritop.com`，因此 canonical、绝对 OG URL 与 sitemap 会默认产出。如需覆盖（例如预览域名），可在构建时设置 `SITE_URL`：

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
