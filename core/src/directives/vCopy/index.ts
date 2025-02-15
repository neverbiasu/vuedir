import type { Directive } from "vue";

interface VCopyHTMLElement extends HTMLElement {
  __vCopy?: (event: MouseEvent) => Promise<void>;
}

export const vCopy: Directive = {
  mounted(el: VCopyHTMLElement, binding) {
    el.style.cursor = "pointer";
    const text = binding.value;

    el.__vCopy = async () => {
      try {
        await navigator.clipboard.writeText(text);
        el.style.transition = "all 0.3s";
        el.style.boxShadow = "0 0 10px rgba(0, 255, 0, 0.5)";
        el.style.border = "2px solid #4CAF50";
        setTimeout(() => {
          el.style.boxShadow = "none";
          el.style.border = "";
        }, 1000);
      } catch (err) {
        console.error("复制失败:", err);
        el.style.transition = "all 0.3s";
        el.style.boxShadow = "0 0 10px rgba(255, 0, 0, 0.5)";
        el.style.border = "2px solid #FF5252";
        setTimeout(() => {
          el.style.boxShadow = "none";
          el.style.border = "";
        }, 1000);
      }
    };

    el.addEventListener("click", el.__vCopy);
  },
  updated(el: VCopyHTMLElement, binding) {
    el.removeEventListener("click", el.__vCopy!);
    el.__vCopy = async () => {
      try {
        await navigator.clipboard.writeText(binding.value);
        el.style.transition = "all 0.3s";
        el.style.boxShadow = "0 0 10px rgba(0, 255, 0, 0.5)";
        el.style.border = "2px solid #4CAF50";
        setTimeout(() => {
          el.style.boxShadow = "none";
          el.style.border = "";
        }, 1000);
      } catch (err) {
        console.error("复制失败:", err);
        el.style.transition = "all 0.3s";
        el.style.boxShadow = "0 0 10px rgba(255, 0, 0, 0.5)";
        el.style.border = "2px solid #FF5252";
        setTimeout(() => {
          el.style.boxShadow = "none";
          el.style.border = "";
        }, 1000);
      }
    };
    el.addEventListener("click", el.__vCopy);
  },
  unmounted(el: VCopyHTMLElement) {
    el.removeEventListener("click", el.__vCopy!);
  },
};
