import { DefaultTheme } from 'vitepress';

export default {
  '/developer/frontend': [
    {
      text: '概览',
      link: '/developer/frontend/',
    },
    {
      text: 'Vite 支持 PWA 应用本地安装',
      link: '/developer/frontend/vue/vue-pwa',
    },
    {
      text: 'Canvas 实现图片元素的缩放、拖拽功能',
      link: '/developer/frontend/javascript/canvas-drag',
    },
    {
      text: 'JS 获取某年有多少周及每周日期',
      link: '/developer/frontend/javascript/year-weeks-and-weekdate',
    },
    {
      text: '手写命令生成 Vue 组件套件',
      link: '/developer/frontend/vue/generate',
    },
    {
      text: 'VueCropper 踩坑',
      link: '/developer/frontend/vue/vue-cropper',
    },
  ],

  '/developer/backend': [
    {
      text: 'Django 在 Window 系统上初始化的步骤',
      link: '/developer/backend/python/at-venv-init',
    },
    {
      text: '基于用户画像的数据推荐算法',
      link: '/developer/backend/python/push_algorithm',
    },
  ],

  '/developer/miniprogram': [
    {
      text: '微信小程序 - 自定义 DatetimePicker 组件',
      link: '/developer/miniprogram/wx/customComponent-datetimePicker',
    },
  ],

  '/developer/tools': [
    {
      text: '阿里飞冰',
      link: '/developer/tools/ali-ice-microservice',
    },
  ],
} as DefaultTheme.Sidebar;
