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
    editLink: {
      pattern: "https://github.com/CodePaintStudio/vuedir/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/CodePaintStudio/vuedir/tree/main",
      },
      {
        icon: "npm",
        link: "https://www.npmjs.com/package/@cp-vuedir/core",
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
      { text: "开始", link: "/guide/" },
      { text: "指令集", link: "/directives/" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "快速开始",
          items: [{ text: "安装", link: "/guide/" }],
        },
        {
          text: "开发者指南",
          items: [
            { text: "启动", link: "/guide/run" },
            { text: "贡献", link: "/guide/contributing" },
          ],
        },
      ],
      "/directives/": [
        {
          text: "CP-VueDir 指令集",
          items: [
            { text: "指令集预览", link: "/directives/" },
            {
              text: "交互类",
              items: [
                { text: "v-copy", link: "/directives/copy" },
                { text: "v-longpress", link: "/directives/longpress" },
                { text: "v-doubleClick", link: "/directives/doubleclick" },
              ],
            },
            {
              text: "视觉类",
              items: [
                { text: "v-highlight", link: "/directives/highlight" },
                { text: "v-spare", link: "/directives/spare" },
                { text: "v-countup", link: "/directives/countup" },
                { text: "v-lazyload", link: "/directives/lazyload" },
              ],
            },
            {
              text: "表单类",
              items: [
                { text: "v-focus", link: "/directives/focus" },
                { text: "v-pwdvisible", link: "/directives/pwdvisible" },
              ],
            },
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
