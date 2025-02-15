import type { App } from "vue";
import { vFocus } from "./directives/vFocus";
import { vCopy } from "./directives/vCopy";

export { vFocus, vCopy };

export interface CPVueDirPlugin {
  install(app: App): void;
}

const VueDir: CPVueDirPlugin = {
  install(app: App) {
    app.directive("focus", vFocus);
    app.directive("copy", vCopy);
  },
};

export default VueDir;
