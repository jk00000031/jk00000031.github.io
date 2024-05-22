import { DefaultTheme } from "vitepress";

export const navbarConfig: DefaultTheme.NavItem[] = [
  {
    text: "Web 开发者服务",
    items: [
      {
        text: "后端",
        link: "/develop/back-end/",
      },
      {
        text: "前端",
        link: "/develop/front-end/",
      },
      {
        text: "小程序",
        link: "/develop/miniprogram/",
      },
      {
        text: "工具",
        link: "/develop/tools/",
      },
    ],
  },
  {
    text: "商业创意",
    link: "/bc/",
  },
  {
    text: "人文地理",
    link: "/human-geography/",
  },
];
