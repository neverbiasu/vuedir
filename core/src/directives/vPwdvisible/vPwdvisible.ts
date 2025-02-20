import type { Directive } from "vue";
import { VPwdvisibleHTMLElement } from "./type";

import { OPEN_EYE_ICON } from "../../icons/openEyeIcon";
import { CLOSED_EYE_ICON } from "../../icons/closedEyeIcon";

const createEyeIcon = (visible: boolean = false): HTMLElement => {
  const icon = document.createElement("div");
  icon.style.position = "absolute";
  icon.style.right = "10px";
  icon.style.top = "50%";
  icon.style.transform = "translateY(-50%)";
  icon.style.cursor = "pointer";
  icon.style.width = "20px";
  icon.style.height = "20px";
  icon.innerHTML = visible ? OPEN_EYE_ICON : CLOSED_EYE_ICON;
  return icon;
};

export const vPwdvisible: Directive = {
  mounted(el: VPwdvisibleHTMLElement) {
    if (!(el instanceof HTMLInputElement) || el.type !== "password") {
      console.warn('v-pwdvisible 指令只能用于 type="password" 的 input 元素');
      return;
    }

    el.style.position = "relative";
    const container = document.createElement("div");
    container.style.position = "relative";
    container.style.display = "inline-block";
    el.parentNode?.insertBefore(container, el);
    container.appendChild(el);

    const eyeIcon = createEyeIcon();
    container.appendChild(eyeIcon);

    const toggleVisibility = () => {
      const isVisible = el.type === "text";
      el.type = isVisible ? "password" : "text";
      eyeIcon.innerHTML = isVisible ? CLOSED_EYE_ICON : OPEN_EYE_ICON;
    };

    eyeIcon.addEventListener("click", toggleVisibility);

    el.__vPwdvisible = {
      toggleVisibility,
      eyeIcon,
    };
  },

  unmounted(el: VPwdvisibleHTMLElement) {
    if (el.__vPwdvisible) {
      el.__vPwdvisible.eyeIcon.removeEventListener(
        "click",
        el.__vPwdvisible.toggleVisibility
      );
      const container = el.__vPwdvisible.eyeIcon.parentNode;
      if (container && container.parentNode) {
        container.parentNode.insertBefore(el, container);
        container.parentNode.removeChild(container);
      }
      delete el.__vPwdvisible;
    }
  },
};
