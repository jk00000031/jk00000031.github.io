import { DefaultTheme } from "vitepress";

import { navbarConfig } from "./nav";
import { sidebarConfig } from "./sidebar";
import { searchConfig } from "./search";

export const themeConfig: DefaultTheme.Config = {
  logo: "/logo.png",
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
    message: "本站内的所有内容均可进行转发，但请注明出处。如果在阅读过程中发现内容有误，欢迎联系我进行修改。",
    copyright: "Copyright © 2024 拖延症患者",
  },
  socialLinks: [
    // { icon: "github", link: "https://github.com/vuejs/vitepress", ariaLabel: "vitepress" },
    { icon: "github", link: "https://github.com/jk00000031", ariaLabel: "观炎" },
  ],

  nav: navbarConfig,
  sidebar: sidebarConfig,
  search: searchConfig,
};
