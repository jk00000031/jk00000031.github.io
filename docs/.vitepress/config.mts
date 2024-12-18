import { defineConfig } from 'vitepress';

import navRouter from './router/nav';
import { developerSidebarRoutes } from './router/sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '没有计划',
  description: '虽然站内有各种想到的创意点，但，我是个拖延症患者。',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    // ['link', { rel: 'stylesheet', href: './theme/var.css' }],
  ],
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
    },
  },

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Sansplan',
    outline: {
      level: [2, 3],
      label: '文章目录',
    },
    notFound: {
      title: '找不到页面了呢~',
      quote: '要不试试搜索一下，或者直接访问首页？',
      linkText: '前往首页',
    },
    footer: {
      message: `本站内的所有内容均可进行转发，但请注明出处。<br />如果在阅读过程中发现内容有误，欢迎将内容链接和截图发送到 <a href="mailto:849989428@qq.com">849989428@qq.com</a>。`,
      copyright: `Copyright © 2024-present <a href="https://github.com/jk00000031" target="__blank">jk00000031</a>`,
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/jk00000031', ariaLabel: '观炎' }],

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            // placeholder: '站内搜索',
            translations: {
              button: {
                buttonText: '站内搜索',
                buttonAriaLabel: '站内搜索',
              },
            },
          },
        },
      },
    },

    nav: navRouter,

    sidebar: {
      ...developerSidebarRoutes,
    },
  },
  vite: {
    server: {
      host: true,
    },
  },
});
