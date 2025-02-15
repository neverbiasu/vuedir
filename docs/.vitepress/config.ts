import { defineConfig } from "vitepress";

export default defineConfig({
  title: "VueDir",
  description: "Vue 3 指令集合",
  themeConfig: {
    nav: [
      { text: "指南", link: "/guide/" },
      { text: "指令", link: "/directives/" },
      { text: "Playground", link: "https://github.com/CodePaintStudio/vuedir" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "指南",
          items: [{ text: "快速开始", link: "/guide/" }],
        },
      ],
      "/directives/": [
        {
          text: "指令",
          items: [{ text: "v-focus", link: "/directives/focus" }],
        },
      ],
    },
  },
});
