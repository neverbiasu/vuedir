import type { Directive } from "vue";

export interface VCopyHTMLElement extends HTMLElement {
  __vCopy?: (event: MouseEvent) => Promise<void>;
  __vCopyIcon?: HTMLElement;
}

export type VCopyDirective = Directive;