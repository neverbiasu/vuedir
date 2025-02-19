import type { App } from "vue";
import { vFocus } from "./directives/vFocus";
import { vCopy } from "./directives/vCopy";
import { vHighlight } from "./directives/vHighlight";
import { vLongpress } from "./directives/vLongpress";
import { vDoubleClick } from "./directives/vDoubleClick";
import { vSpare } from "./directives/vSpare";
import { vCountup } from "./directives/vCountup";
import { vLazyload } from "./directives/vLazyload";
import { vPwdvisible } from "./directives/vPwdvisible";

export {
  vFocus,
  vCopy,
  vHighlight,
  vLongpress,
  vDoubleClick,
  vSpare,
  vCountup,
  vLazyload,
  vPwdvisible,
};

export interface CPVueDirPlugin {
  install(app: App): void;
}

const VueDir: CPVueDirPlugin = {
  install(app: App) {
    app.directive("focus", vFocus);
    app.directive("copy", vCopy);
    app.directive("highlight", vHighlight);
    app.directive("longpress", vLongpress);
    app.directive("doubleclick", vDoubleClick);
    app.directive("spare", vSpare);
    app.directive("countup", vCountup);
    app.directive("lazyload", vLazyload);
    app.directive("pwdvisible", vPwdvisible);
  },
};

export default VueDir;
