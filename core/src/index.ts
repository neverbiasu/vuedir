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
import { vDebounce } from "./directives/vDebounce";
import { vThrottle } from "./directives/vThrottle";
import { vClearable } from "./directives/vClearable";
import { vWatermarker } from "./directives/vWatermarker";
import { vThreeClick } from "./directives/vThreeClick";
import { vDrag } from "./directives/vDrag";
import { vRipple } from "./directives/vRipple";
import { vEmoji } from "./directives/vEmoji";
import { vEllipsis } from "./directives/vEllipsis/core";

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
  vDebounce,
  vThrottle,
  vClearable,
  vWatermarker,
  vThreeClick,
  vDrag,
  vRipple,
  vEmoji,
  vEllipsis,
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
    app.directive("debounce", vDebounce);
    app.directive("throttle", vThrottle);
    app.directive("clearable", vClearable);
    app.directive("watermarker", vWatermarker);
    app.directive("threeclick", vThreeClick);
    app.directive("drag", vDrag);
    app.directive("ripple", vRipple);
    app.directive("emoji", vEmoji);
    app.directive("ellipsis", vEllipsis);
  },
};

export default VueDir;
