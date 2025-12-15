import { defineConfig } from "vitepress";
import tailwindcss from "@tailwindcss/vite";

import navRouter from "./router/nav";
import { developerSidebarRoutes, ideaSidebarRoutes } from "./router/sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "迷雾探索 \\ Hazex",
  description: "虽然站内有各种想到的创意点，但，我是个拖延症患者。",
  lang: "zh-CN",
  head: [
    ["link", { rel: "icon", href: "/favicon.svg" }],
    // ['link', { rel: 'stylesheet', href: './theme/var.css' }],
  ],
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
    },
  },

  themeConfig: {
    siteTitle: false,
    logo: {
      light: "/logo-light.svg",
      dark: "/logo-dark.svg",
    },
    outline: {
      level: [2, 3],
      label: "文章目录",
    },
    notFound: {
      title: "找不到页面了呢~",
      quote: "要不试试搜索一下，或者直接访问首页？",
      linkText: "前往首页",
    },
    footer: {
      message: `如果在阅读过程中发现内容有误，欢迎将内容链接和截图发送到 <a href="mailto:849989428@qq.com">849989428@qq.com</a>。`,
      copyright: `Copyright © 2024-present <a href="https://github.com/jk00000031" target="__blank">jk00000031</a>`,
    },
    socialLinks: [{ icon: "github", link: "https://github.com/jk00000031", ariaLabel: "观炎" }],

    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },

    nav: navRouter,

    sidebar: {
      ...developerSidebarRoutes,
      ...ideaSidebarRoutes,
    },
  },
  vite: {
    server: {
      host: true,
    },
    plugins: [tailwindcss()],
  },
});
