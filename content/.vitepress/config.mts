import { defineConfig } from "vitepress";
import { defaultConfig } from "./config/default";
import { themeConfig } from "./config/theme";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...defaultConfig,

  themeConfig,
  vite: {
    server: {
      host: true,
    },
  },
});
