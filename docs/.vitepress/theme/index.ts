import DefaultTheme from "vitepress/theme";
import "./custom.css";
import "./fonts.css";
import Layout from "./Layout.vue";

import VueDir from "@cp-vuedir/core";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(VueDir);
  },
  Layout: Layout,
};
