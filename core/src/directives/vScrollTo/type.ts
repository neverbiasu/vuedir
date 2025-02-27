import type { Ref, DirectiveBinding } from "vue";

export interface ScrollToOptions {
  to?: HTMLElement | Ref<HTMLElement | null> | number; // Scroll target (HTMLElement, ref or offset number)
  duration?: number; // Scroll duration (in ms)
  behavior?: ScrollBehavior; // Scroll behavior (smooth or auto)
}

export interface ScrollToDirective {
  mounted: (
    el: HTMLElement,
    binding: DirectiveBinding<ScrollToOptions>
  ) => void;
  updated: (
    el: HTMLElement,
    binding: DirectiveBinding<ScrollToOptions>
  ) => void;
}
