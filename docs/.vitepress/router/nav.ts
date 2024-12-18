import { DefaultTheme } from 'vitepress';

export default [
  {
    text: '全栈',
    items: [
      {
        text: 'Web 前端',
        link: '/developer/frontend/',
      },
      {
        text: '后端',
        link: '/developer/backend/',
      },
      {
        text: '小程序',
        link: '/developer/miniprogram/',
      },
    ],
  },
  {
    text: '开发进阶工具',
    items: [
      {
        text: '微前端',
        link: '/developer/tools/',
      },
    ],
  },
] as DefaultTheme.NavItem[];
