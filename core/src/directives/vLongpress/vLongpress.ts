import type { Directive } from "vue";

interface VLongpressOptions {
  event: () => void;
  delay?: number;
}

interface VLongpressHTMLElement extends HTMLElement {
  __vLongpressTimer?: NodeJS.Timeout;
  __vLongpressHandler?: () => void;
  __vLongpressMousedownHandler?: (e: MouseEvent) => void;
  __vLongpressMouseupHandler?: (e: MouseEvent) => void;
}

export const vLongpress: Directive<HTMLElement, VLongpressOptions> = {
  mounted(el: VLongpressHTMLElement, binding) {
    if (typeof binding.value !== "object" || !binding.value.event) {
      console.error("v-longpress指令需要一个包含event函数的对象参数");
      return;
    }

    const { event, delay = 2000 } = binding.value;

    el.__vLongpressHandler = () => {
      event();
    };

    el.__vLongpressMousedownHandler = () => {
      el.__vLongpressTimer = setTimeout(() => {
        el.__vLongpressHandler?.();
      }, delay);
    };

    el.__vLongpressMouseupHandler = () => {
      if (el.__vLongpressTimer) {
        clearTimeout(el.__vLongpressTimer);
      }
    };

    el.addEventListener("mousedown", el.__vLongpressMousedownHandler);
    el.addEventListener("mouseup", el.__vLongpressMouseupHandler);
    el.addEventListener("mouseleave", el.__vLongpressMouseupHandler);
  },

  unmounted(el: VLongpressHTMLElement) {
    if (el.__vLongpressMousedownHandler) {
      el.removeEventListener("mousedown", el.__vLongpressMousedownHandler);
    }
    if (el.__vLongpressMouseupHandler) {
      el.removeEventListener("mouseup", el.__vLongpressMouseupHandler);
      el.removeEventListener("mouseleave", el.__vLongpressMouseupHandler);
    }
  },
};
