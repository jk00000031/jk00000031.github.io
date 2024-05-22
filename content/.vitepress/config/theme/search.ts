import { DefaultTheme } from "vitepress";

export const searchConfig:
  | { provider: "local"; options?: DefaultTheme.LocalSearchOptions }
  | { provider: "algolia"; options: DefaultTheme.AlgoliaSearchOptions } = {
  provider: "local",
  options: {
    locales: {
      "zh-CN": {
        translations: {
          button: {
            buttonText: "搜索",
            buttonAriaLabel: "搜索",
          },
        },
      },
    },
  },
};
