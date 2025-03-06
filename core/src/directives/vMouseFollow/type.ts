import type { Directive } from 'vue'

export interface MouseFollowHTMLElement extends HTMLElement {
  __mousemoveHandler?: (event: MouseEvent) => void
}

export type MouseFollowDirective = Directive<MouseFollowHTMLElement, boolean | undefined> 