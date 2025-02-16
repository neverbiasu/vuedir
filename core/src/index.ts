import type { App } from "vue";
import { vFocus } from "./directives/vFocus";
import { vCopy } from "./directives/vCopy";
import { vHighlight } from "./directives/vHighlight";
import { vLongpress } from "./directives/vLongpress";

export { vFocus, vCopy, vHighlight, vLongpress };

export interface CPVueDirPlugin {
  install(app: App): void;
}

const VueDir: CPVueDirPlugin = {
  install(app: App) {
    app.directive("focus", vFocus);
    app.directive("copy", vCopy);
    app.directive("highlight", vHighlight);
    app.directive("longpress", vLongpress);
  },
};

export default VueDir;
