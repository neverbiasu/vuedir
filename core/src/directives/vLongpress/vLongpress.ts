import type { Directive, DirectiveBinding } from "vue";

interface VLongpressHTMLElement extends HTMLElement {
  __vLongpressTimer?: NodeJS.Timeout;
  __vLongpressHandler?: () => void;
  __vLongpressMousedownHandler?: (e: MouseEvent) => void;
  __vLongpressMouseupHandler?: (e: MouseEvent) => void;
}

function parseModifiers(binding: DirectiveBinding): {
  event: () => void;
  delay: number;
} {
  let event: () => void;
  let delay = 2000;

  if (typeof binding.value === "object" && binding.value.event) {
    event = binding.value.event;
    delay = binding.value.delay || delay;
  } else if (typeof binding.value === "function") {
    event = binding.value;
  } else {
    console.error("v-longpress指令需要一个函数或包含event函数的对象参数");
    return { event: () => {}, delay };
  }

  return { event, delay };
}

export const vLongpress: Directive<HTMLElement> = {
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
