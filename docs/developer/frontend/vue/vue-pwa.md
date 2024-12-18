# 为你的网页应用支持本地安装

> 本示例项目技术框架为 Vue 3 + Vite

在 `Vue 3` 项目中使用 `Vite` 配置 `PWA (Progressive Web App)` 是一个相对简单的过程，下面是一个基本的步骤：

## 1. 安装 Vite PWA 插件

首先，在你的 `Vue 3` 项目中安装 `Vite PWA` 插件。

```bash
npm install vite-plugin-pwa --save-dev
```

## 2. 配置 Vite PWA 插件

在 `vite.config.ts` 文件中进行配置，添加 `PWA` 插件：

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePWA from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate', // 自动更新 Service Worker
      manifest: {
        name: '你的应用名称',
        short_name: '应用简称',
        description: '应用描述',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
          {
            src: '/icon.png', // 应用图标路径
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        // 这里可以自定义 Workbox 配置
      },
    }),
  ],
})

```

## 3. 创建应用图标

在你的 `public` 文件夹中，确保有一个图标文件（例如 `icon.png`），该图标会在 `PWA` 中使用。

## 4. 配置 manifest.json

`Vite PWA` 插件会自动生成一个 `manifest.json` 文件，你可以在插件配置中自定义它的内容。上面代码中的 `manifest` 就是这样的配置，确保为你的 `PWA` 设置正确的属性，如 `name、icons`、`theme_color` 等。

## 5. Service Worker 配置

通过 `PWA` 插件，`Vite` 会自动生成一个 `service-worker.js` 文件并注册到项目中。如果需要进行自定义配置，可以在 `workbox` 部分进行进一步设置。

## 6. 运行和打包

- 运行开发服务器：

```bash
npm run dev
```

- 打包构建：

```bash
npm run build
```

`Vite` 会为你生成一个包含 `Service Worker` 的 `PWA` 文件，可以部署到服务器上进行测试。

## 7. 验证 PWA 功能

在浏览器中打开开发者工具，查看应用是否被正确地安装为 `PWA`。你可以在 `Application` 标签中查看到 `PWA` 的 `manifest` 和 `Service Worker` 的信息。