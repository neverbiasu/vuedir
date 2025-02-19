import type { Directive } from "vue";

interface VCopyHTMLElement extends HTMLElement {
  __vCopy?: (event: MouseEvent) => Promise<void>;
  __vCopyIcon?: HTMLElement;
}

const COPY_ICON = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
</svg>`;

const SUCCESS_ICON = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20 6L9 17l-5-5"></path>
</svg>`;

export const vCopy: Directive = {
  mounted(el: VCopyHTMLElement, binding) {
    // 创建图标元素
    const iconElement = document.createElement('div');
    iconElement.innerHTML = COPY_ICON;
    iconElement.style.cssText = `
      position: absolute;
      top: 4px;
      right: 4px;
      width: 16px;
      height: 16px;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.3s;
      color: #666;
    `;
    el.__vCopyIcon = iconElement;

    // 设置父元素样式
    if (el.style.position === '') {
      el.style.position = 'relative';
    }
    el.appendChild(iconElement);

    const copyText = async () => {
      try {
        const textToCopy = el.textContent?.trim() ?? "";
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

    // 添加鼠标悬浮事件
    el.addEventListener("mouseenter", () => {
      if (el.__vCopyIcon) {
        el.__vCopyIcon.style.opacity = '1';
      }
    });

    el.addEventListener("mouseleave", () => {
      if (el.__vCopyIcon) {
        el.__vCopyIcon.style.opacity = '0';
      }
    });
  },

  updated(el: VCopyHTMLElement, binding) {
    if (el.__vCopy) {
      el.removeEventListener("click", el.__vCopy);
    }
    const copyText = async () => {
      try {
        const textToCopy = el.textContent?.trim() ?? "";
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
    // 移除图标元素
    if (el.__vCopyIcon) {
      el.removeChild(el.__vCopyIcon);
    }
  },
};

function showFeedback(el: VCopyHTMLElement, success: boolean) {
  if (el.__vCopyIcon) {
    el.__vCopyIcon.innerHTML = success ? SUCCESS_ICON : COPY_ICON;
    el.__vCopyIcon.style.color = success ? '#52c41a' : '#666';

    // 2秒后恢复原始图标
    setTimeout(() => {
      if (el.__vCopyIcon) {
        el.__vCopyIcon.innerHTML = COPY_ICON;
        el.__vCopyIcon.style.color = '#666';
      }
    }, 2000);
  }
}
