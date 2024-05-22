import { DefaultTheme } from "vitepress";

export type loopSidebar = { [x: string]: DefaultTheme.SidebarItem[] | loopSidebar };

export const sidebar: loopSidebar = {
  develop: {
    "back-end": [
      {
        text: "什么是 Web 后端？",
        link: "/develop/back-end/",
      },
      {
        text: "Python Web",
        items: [
          {
            text: "Django 在 Window 系统上初始化的步骤",
            link: "/develop/back-end/python/at-venv-init",
          },
        ],
      },
    ],
    "front-end": [
      {
        text: "什么是Web前端？",
        link: "/develop/front-end/",
      },
      {
        text: "Javascript",
        items: [
          {
            text: "Canvas 实现图片元素的缩放、拖拽功能",
            link: "/develop/front-end/javascript/canvas-drag",
          },
          {
            text: "JS 获取某年有多少周及每周日期",
            link: "/develop/front-end/javascript/year-weeks-and-weekdate",
          },
        ],
      },
      {
        text: "Vue",
        items: [
          {
            text: "手写命令生成 Vue 组件套件",
            link: "/develop/front-end/vue/generate",
          },
          {
            text: "VueCropper 踩坑",
            link: "/develop/front-end/vue/vue-cropper",
          },
        ],
      },
    ],
    miniprogram: [
      {
        text: "小程序简介",
        link: "/develop/miniprogram/",
      },
      {
        text: "微信小程序",
        items: [
          {
            text: "自定义 DatetimePicker 组件",
            link: "/develop/miniprogram/wx/customComponent-datetimePicker",
          },
        ],
      },
    ],
    tools: [
      {
        text: "Guide",
        link: "/develop/tools/",
      },
      {
        text: "阿里飞冰微服务",
        link: "/develop/tools/ali-ice-microservice",
      },
    ],
  },
  bc: [
    {
      text: "什么是商业创意？",
      link: "/bc/",
    },
    {
      text: "石材工业平台",
      link: "/bc/stone-industry-platform",
    },
    {
      text: "生态环境治理及碳中和",
      link: "/bc/ecology",
    },
  ],
};

function getValueByPath(obj: loopSidebar, path: string) {
  if (!obj || !path) {
    return undefined;
  }

  // 将路径按照 '.' 分割成数组
  const keys = path.split(".");

  // 逐级访问对象的属性
  let result: loopSidebar | DefaultTheme.SidebarItem[] = obj;
  for (let key of keys) {
    if (result[key] !== undefined) {
      result = result[key];
    } else {
      return undefined;
    }
  }

  return result;
}

export const getPageSidebar = (prefix: string): DefaultTheme.SidebarItem[] => {
  const result = getValueByPath(sidebar, prefix);
  console.log(result);
  return result ? (result as DefaultTheme.SidebarItem[]) : [];
};

export const sidebarConfig: DefaultTheme.Sidebar = {
  "/develop/back-end/": getPageSidebar("develop.back-end"),
  "/develop/front-end/": getPageSidebar("develop.front-end"),
  "/develop/miniprogram/": getPageSidebar("develop.miniprogram"),
  "/develop/tools/": getPageSidebar("develop.tools"),
  "/bc/": getPageSidebar("bc"),
};
