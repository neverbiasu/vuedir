import type { Directive } from "vue";

interface VCopyHTMLElement extends HTMLElement {
  __vCopy?: (event: MouseEvent) => Promise<void>;
}

export const vCopy: Directive = {
  mounted(el: VCopyHTMLElement, binding) {
    const copyText = async () => {
      try {
        const textToCopy = binding.value ?? el.textContent?.trim() ?? "";
        await navigator.clipboard.writeText(textToCopy);
        showFeedback(el, true);
      } catch (err) {
        console.error("复制失败:", err);
        showFeedback(el, false);
      }
    };

    el.style.cursor = "pointer";
    el.__vCopy = copyText;
    el.addEventListener("click", copyText);
  },
  updated(el: VCopyHTMLElement, binding) {
    if (el.__vCopy) {
      el.removeEventListener("click", el.__vCopy);
    }
    const copyText = async () => {
      try {
        const textToCopy = binding.value ?? el.textContent?.trim() ?? "";
        await navigator.clipboard.writeText(textToCopy);
        showFeedback(el, true);
      } catch (err) {
        console.error("复制失败:", err);
        showFeedback(el, false);
      }
    };
    el.__vCopy = copyText;
    el.addEventListener("click", copyText);
  },
  unmounted(el: VCopyHTMLElement) {
    if (el.__vCopy) {
      el.removeEventListener("click", el.__vCopy);
    }
  },
};

function showFeedback(el: HTMLElement, success: boolean) {
  el.style.transition = "all 0.3s";
  el.style.boxShadow = success
    ? "0 0 10px rgba(0, 255, 0, 0.5)"
    : "0 0 10px rgba(255, 0, 0, 0.5)";
  setTimeout(() => {
    el.style.boxShadow = "none";
  }, 1000);
}
