import type { Directive } from "vue";

interface VPwdvisibleHTMLElement extends HTMLInputElement {
  __vPwdvisible?: {
    toggleVisibility: () => void;
    eyeIcon: HTMLElement;
  };
}

const createEyeIcon = (visible: boolean = false): HTMLElement => {
  const icon = document.createElement("div");
  icon.style.position = "absolute";
  icon.style.right = "10px";
  icon.style.top = "50%";
  icon.style.transform = "translateY(-50%)";
  icon.style.cursor = "pointer";
  icon.style.width = "20px";
  icon.style.height = "20px";
  icon.innerHTML = visible ? getOpenEyeSvg() : getClosedEyeSvg();
  return icon;
};

const getOpenEyeSvg = (): string => `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
`;

const getClosedEyeSvg = (): string => `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M2 2l20 20"/>
    <path d="M6.71 6.71C3.93 8.86 2 12 2 12s3-7 10-7c1.04 0 2.04.15 2.97.42"/>
    <path d="M17.29 17.29C20.07 15.14 22 12 22 12s-3 7-10 7c-1.04 0-2.04-.15-2.97-.42"/>
  </svg>
`;

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
      eyeIcon.innerHTML = isVisible ? getClosedEyeSvg() : getOpenEyeSvg();
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
