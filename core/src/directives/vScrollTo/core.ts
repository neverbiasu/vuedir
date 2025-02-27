import { DirectiveBinding } from "vue";
import { ScrollToOptions, ScrollToDirective } from "./type";

// 自定义 v-scrollTo 指令
export const vScrollTo: ScrollToDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding;
    const { to, duration, behavior }: ScrollToOptions = value || {};

    let target: HTMLElement | Document | null = document.documentElement;

    if (to) {
      if (typeof to === "number") {
        target = document.documentElement;
      } else if (to instanceof HTMLElement) {
        target = to;
      } else if ("value" in to && to.value instanceof HTMLElement) {
        target = to.value;
      }
    }

    const scrollDuration = duration ?? 500;

    const scrollBehavior: ScrollBehavior = behavior ?? "smooth";

    if (target) {
      el.addEventListener("click", () => {
        scrollTo(target, scrollDuration, scrollBehavior);
      });
    }
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding;
    const { to, duration, behavior }: ScrollToOptions = value || {};

    let target: HTMLElement | Document | null = document.documentElement;

    if (to) {
      if (typeof to === "number") {
        target = document.documentElement;
      } else if (to instanceof HTMLElement) {
        target = to;
      } else if ("value" in to && to.value instanceof HTMLElement) {
        target = to.value;
      }
    }

    const scrollDuration = duration ?? 500;
    const scrollBehavior: ScrollBehavior = behavior ?? "smooth";

    if (target) {
      el.removeEventListener("click", () => {
        scrollTo(target, scrollDuration, scrollBehavior);
      });
      el.addEventListener("click", () => {
        scrollTo(target, scrollDuration, scrollBehavior);
      });
    }
  },
};

function scrollTo(
  target: HTMLElement | Document | null,
  duration: number,
  behavior: ScrollBehavior
) {
  const start = window.scrollY || window.pageYOffset;
  const end = target instanceof HTMLElement ? target.offsetTop : 0;
  const distance = end - start;
  const startTime = performance.now();

  function animateScroll(currentTime: number) {
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, start, distance, duration);
    window.scrollTo({
      top: run,
      behavior,
    });
    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    } else {
      window.scrollTo({
        top: end,
        behavior,
      });
    }
  }

  requestAnimationFrame(animateScroll);
}

// 缓动公式
function ease(t: number, b: number, c: number, d: number) {
  const p = t / d;
  return c * p * p + b;
}
