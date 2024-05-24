import { DefaultTheme } from "vitepress";

import { navbarConfig } from "./nav";
import { sidebarConfig } from "./sidebar";
import { searchConfig } from "./search";

export const themeConfig: DefaultTheme.Config = {
  logo: "/logo2.png",
  outline: {
    level: "deep",
    label: "文章目录",
  },
  notFound: {
    title: "找不到页面了呢~",
    quote: "要不试试搜索一下，或者直接访问首页？",
    linkText: "前往首页",
  },
  footer: {
    message: `本站内的所有内容均可进行转发，但请注明出处。<br />如果在阅读过程中发现内容有误，欢迎将内容链接和截图发送到 <a href="mailto:849989428@qq.com">849989428@qq.com</a>。`,
    copyright: `Copyright © 2024-present <a href="https://github.com/jk00000031" target="__blank">jk00000031</a>`,
  },
  socialLinks: [
    // { icon: "github", link: "https://github.com/vuejs/vitepress", ariaLabel: "vitepress" },
    { icon: "github", link: "https://github.com/jk00000031", ariaLabel: "观炎" },
  ],

  nav: navbarConfig,
  sidebar: sidebarConfig,
  search: searchConfig,
};
