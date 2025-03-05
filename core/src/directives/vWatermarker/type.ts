import type { Directive } from 'vue'

export interface WatermarkerOptions {
  text?: string
  direction?: 'horizontal' | 'vertical' | 'diagonal'
  fontSize?: number
  fontFamily?: string
  textColor?: string
  opacity?: number
  gap?: number
  zIndex?: number
}

export interface WatermarkerHTMLElement extends HTMLElement {
  __watermarker?: {
    observer?: MutationObserver
    options?: WatermarkerOptions
  }
}

export type WatermarkerDirective = Directive
