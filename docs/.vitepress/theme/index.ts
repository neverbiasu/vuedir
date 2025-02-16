import DefaultTheme from "vitepress/theme";
import "./custom.css";

import VueDir from "@cp-vuedir/core";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(VueDir);
  },
};
