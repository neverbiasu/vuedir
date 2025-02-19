import { VLongpressHTMLElement, VLongpressDirective, parseModifiers } from "./type";

export const vLongpress: VLongpressDirective = {
  mounted(el: VLongpressHTMLElement, binding) {
    const { event, delay } = parseModifiers(binding);

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
