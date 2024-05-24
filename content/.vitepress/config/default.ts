import { DefaultTheme, UserConfig } from "vitepress";

export const defaultConfig: Omit<UserConfig<DefaultTheme.Config>, "themeConfig"> = {
  title: "Interval 3",
  description: "虽然站内有各种想到的创意点，但，我是个拖延症患者。",
  lang: "zh-CN",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
    },
    // "zh-CN": {
    //   label: "简体中文",
    //   lang: "zh-CN",
    // },
    // en: {
    //   label: "English",
    //   lang: "en",
    // },
  },
};
