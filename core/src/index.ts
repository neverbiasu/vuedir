import type { App } from "vue";
import { vFocus } from "./vFocus";

export { vFocus };

export interface VueDirPlugin {
  install(app: App): void;
}

const VueDir: VueDirPlugin = {
  install(app: App) {
    app.directive("focus", vFocus);
  },
};

export default VueDir;
