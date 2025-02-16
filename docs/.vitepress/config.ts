import { defineConfig } from "vitepress";
import { resolve } from "path";

// https://vitepress.dev/reference/site-config

export default defineConfig({
  base: "/vuedir/",
  title: "CP-VueDir",
  description: "Vue 3 指令集合",
  lastUpdated: true,
  head: [
    ["link", { rel: "icon", href: "/vuedir/logo.jpg" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
  ],
  vite: {
    resolve: {
      alias: {
        "@cp-vuedir/core": resolve(__dirname, "../../core/src"),
      },
    },
  },
  themeConfig: {
    logo: "/logo.jpg",
    lastUpdatedText: "最后更新时间",
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/CodePaintStudio/vuedir/tree/main",
      },
    ],
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },
    nav: [
      { text: "开始指南", link: "/guide/" },
      { text: "查看指令", link: "/directives/" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "指南",
          items: [
            { text: "快速开始", link: "/guide/" },
            { text: "贡献指南", link: "/guide/contributing" },
            { text: "开发指南", link: "/guide/development" },
          ],
        },
      ],
      "/directives/": [
        {
          text: "指令",
          items: [
            { text: "v-focus", link: "/directives/focus" },
            { text: "v-copy", link: "/directives/copy" },
            { text: "v-highlight", link: "/directives/highlight" },
            { text: "v-longpress", link: "/directives/longpress" },
          ],
        },
      ],
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: () => false,
      },
    },
  },
});
