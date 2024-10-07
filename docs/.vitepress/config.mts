import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Learn Once',
  description: '虽然站内有各种想到的创意点，但，我是个拖延症患者。',
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
    },
  },

  themeConfig: {
    logo: '/logo.svg',
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

    nav: [
      {
        text: 'Web 开发者',
        link: '/developer/',
      },
    ],

    sidebar: {
      '/developer/': [
        {
          text: '吐槽回顾',
          link: '/developer/',
        },
        {
          text: '前端',
          items: [
            {
              text: 'Canvas 实现图片元素的缩放、拖拽功能',
              link: '/developer/front-end/javascript/canvas-drag',
            },
            {
              text: 'JS 获取某年有多少周及每周日期',
              link: '/developer/front-end/javascript/year-weeks-and-weekdate',
            },
            {
              text: '手写命令生成 Vue 组件套件',
              link: '/developer/front-end/vue/generate',
            },
            {
              text: 'VueCropper 踩坑',
              link: '/developer/front-end/vue/vue-cropper',
            },
            {
              text: '微前端',
              items: [
                {
                  text: '阿里飞冰微服务',
                  link: '/developer/tools/ali-ice-microservice',
                },
              ],
            },
          ],
        },
        {
          text: '小程序',
          items: [
            {
              text: '微信小程序 - 自定义 DatetimePicker 组件',
              link: '/developer/miniprogram/wx/customComponent-datetimePicker',
            },
          ],
        },
        {
          text: '服务端',
          items: [
            {
              text: 'Python',
              items: [
                {
                  text: 'Django 在 Window 系统上初始化的步骤',
                  link: '/developer/back-end/python/at-venv-init',
                },
                {
                  text: '基于用户画像的数据推荐算法',
                  link: '/developer/back-end/python/push_algorithm',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  vite: {
    server: {
      host: true,
    },
  },
});
