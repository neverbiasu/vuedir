import { DirectiveBinding } from "vue";
import { ScrollToOptions, ScrollToDirective } from "./type";

// 自定义 v-scrollTo 指令
export const vScrollTo: ScrollToDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const scrollHandler = () => {
      // 获取最新的 target
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

      // 执行滚动
      if (target) {
        scrollTo(el, target, scrollDuration, scrollBehavior);
      }
    };

    // 绑定点击事件
    el.addEventListener("click", scrollHandler);
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    const scrollHandler = () => {
      // 获取最新的 target
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

      // 执行滚动
      if (target) {
        scrollTo(el, target, scrollDuration, scrollBehavior);
      }
    };

    // 清除之前的事件处理程序
    el.removeEventListener("click", scrollHandler);

    // 重新添加新的事件处理程序
    el.addEventListener("click", scrollHandler);
  },
};

// 计算滚动到目标位置
function scrollTo(
  el: HTMLElement,
  target: HTMLElement | Document | null,
  duration: number,
  behavior: ScrollBehavior
) {
  // 获取当前滚动位置
  const start = window.scrollY || window.pageYOffset;

  // 计算目标元素相对于文档的实际位置
  const rect =
    target instanceof HTMLElement ? target.getBoundingClientRect() : { top: 0 };
  const targetPosition = rect.top + window.pageYOffset;

  // 计算滚动的总距离
  const distance = targetPosition - start;
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
        top: targetPosition,
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
