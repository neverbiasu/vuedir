import type { Directive } from "vue";

interface VClearableHTMLElement extends HTMLElement {
  __vClearable?: {
    clearContent: () => void;
    toggleIcon: () => void;
    container: HTMLElement;
    icon: HTMLElement;
    input: HTMLInputElement;
  };
}

import { CLEAR_ICON } from "../../icons/clearIcon";

const createClearableContainer = (
  el: HTMLElement,
  input: HTMLElement
): HTMLElement => {
  const container = document.createElement("div");
  const computedStyle = window.getComputedStyle(input);

  container.style.cssText = `
    position: relative;
    display: inline-block;
    width: ${el.style.width || "100%"};
    min-width: 0;
    margin: ${computedStyle.margin};
  `;

  input.style.margin = "0";
  return container;
};

const createClearIcon = (): HTMLElement => {
  const icon = document.createElement("div");
  icon.innerHTML = CLEAR_ICON;
  icon.style.cssText = `
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    width: 18px;
    height: 18px;
    cursor: pointer;
    color: #999;
    transition: all 0.3s ease;
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 2;
    padding: 2px;
    border-radius: 50%;
    background-color: transparent;
  `;

  icon.addEventListener("mouseenter", () => {
    icon.style.color = "#666";
    icon.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
  });

  icon.addEventListener("mouseleave", () => {
    icon.style.color = "#999";
    icon.style.backgroundColor = "transparent";
  });

  const svg = icon.querySelector("svg");
  if (svg) {
    svg.style.cssText = `
      width: 100%;
      height: 100%;
      pointer-events: none;
    `;
  }

  return icon;
};

export const vClearable: Directive = {
  mounted(el: VClearableHTMLElement) {
    const input =
      el.tagName.toLowerCase() === "input"
        ? el
        : el.querySelector("input");

    if (!input) {
      console.warn("[v-clearable] 指令只能用于 input 元素");
      return;
    }

    const container = createClearableContainer(el, input as HTMLInputElement);
    const icon = createClearIcon();

    const inputElement = input as HTMLInputElement;
    inputElement.style.cssText += `
      padding-right: 28px;
      width: 100%;
    `;

    el.parentNode?.insertBefore(container, el);
    container.appendChild(inputElement);
    container.appendChild(icon);

    const clearContent = () => {
      inputElement.value = "";
      inputElement.dispatchEvent(new Event("input"));
      inputElement.dispatchEvent(new Event("change"));
      inputElement.focus();
      toggleIcon();
    };

    const toggleIcon = () => {
      icon.style.display = inputElement.value ? "flex" : "none";
    };

    icon.addEventListener("click", clearContent);
    inputElement.addEventListener("input", toggleIcon);

    toggleIcon();

    el.__vClearable = {
      clearContent,
      toggleIcon,
      container,
      icon,
      input: inputElement,
    };
  },

  updated(el: VClearableHTMLElement) {
    el.__vClearable?.toggleIcon();
  },

  unmounted(el: VClearableHTMLElement) {
    if (el.__vClearable) {
      const { clearContent, toggleIcon, container, icon, input } =
        el.__vClearable;

      icon.removeEventListener("click", clearContent);
      input.removeEventListener("input", toggleIcon);

      input.style.paddingRight = "";
      input.style.width = "";

      if (container.parentNode) {
        container.parentNode.insertBefore(input, container);
        container.parentNode.removeChild(container);
      }

      delete el.__vClearable;
    }
  },
};
