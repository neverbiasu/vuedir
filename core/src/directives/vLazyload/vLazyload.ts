import type { DirectiveBinding } from "vue";
import { getDefaultImageUrl } from "../vSpare/DefaultImage";

// 扩展 HTMLImageElement 接口以支持自定义属性
interface LazyloadHTMLElement extends HTMLImageElement {
  _observer?: IntersectionObserver;
  _originalSrc?: string;
}

// 默认配置
const defaultOptions = {
  threshold: 0.01, // 当图片有 1% 进入视口时触发
  rootMargin: "200px", // 提前加载距离（上下各 200px）
};

export const vLazyload = {
  mounted(el: LazyloadHTMLElement, binding: DirectiveBinding) {
    // 确保指令只用于 <img> 元素
    if (!(el instanceof HTMLImageElement)) {
      console.error("v-lazyload can only be used on <img> elements");
      return;
    }

    // 合并默认配置和用户传入的配置
    const options = { ...defaultOptions, ...(binding.value?.options || {}) };

    // 获取 data-src 属性值
    const dataSrc = binding.value?.src || el.getAttribute("data-src");
    if (!dataSrc) {
      console.error(
        "v-lazyload requires a valid 'data-src' attribute or 'src' in binding value"
      );
      return;
    }

    // 设置默认占位图
    el.src = getDefaultImageUrl();
    el.setAttribute("data-src", dataSrc); // 确保 data-src 属性存在

    // 添加错误处理
    el.addEventListener("error", () => {
      console.error("Image failed to load:", el.src);
      el.src = getDefaultImageUrl(); // 加载失败时回退到默认图片
    });

    // 创建 IntersectionObserver 实例
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const dataSrc = el.getAttribute("data-src");
        if (dataSrc) {
          console.log("Loading image:", dataSrc);
          el.src = dataSrc; // 加载真实图片
          el.removeAttribute("data-src"); // 移除 data-src 属性
        }
        observer.unobserve(el); // 停止观察
        el._observer = undefined;
      }
    }, options);

    // 将 observer 存储在元素上以便清理
    el._observer = observer;
    observer.observe(el); // 开始观察
  },

  unmounted(el: LazyloadHTMLElement) {
    // 清理 IntersectionObserver
    if (el._observer) {
      el._observer.disconnect();
      el._observer = undefined;
    }
  },
};
