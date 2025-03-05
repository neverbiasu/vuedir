import type { Directive, DirectiveBinding } from 'vue'
import { WatermarkerOptions } from './type'

const defaultOptions: WatermarkerOptions = {
  text: '水印文本',
  direction: 'diagonal',
  fontSize: 16,
  fontFamily: 'Arial',
  textColor: '#000000',
  opacity: 0.1,
  gap: 100,
  zIndex: 1000
}

const createWatermark = (el: HTMLElement, options: WatermarkerOptions) => {
  const opts = { ...defaultOptions, ...options }
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  // 设置画布大小
  const maxSize = Math.max(el.clientWidth, el.clientHeight) * 2
  canvas.width = maxSize
  canvas.height = maxSize

  // 设置文字样式
  ctx.font = `${opts.fontSize}px ${opts.fontFamily}`
  ctx.fillStyle = opts.textColor || '#000000'
  ctx.globalAlpha = opts.opacity || 0.1

  // 根据方向绘制水印
  const text = opts.text || '水印文本'
  const gap = opts.gap || 100

  if (opts.direction === 'horizontal') {
    for (let y = 0; y < maxSize; y += gap) {
      for (let x = 0; x < maxSize; x += gap * 2) {
        ctx.fillText(text, x, y)
      }
    }
  } else if (opts.direction === 'vertical') {
    ctx.rotate(Math.PI / 2)
    for (let y = 0; y < maxSize; y += gap) {
      for (let x = 0; x < maxSize; x += gap * 2) {
        ctx.fillText(text, y, -x)
      }
    }
  } else {
    // 默认对角线方向
    ctx.rotate(-Math.PI / 4)
    for (let y = -maxSize; y < maxSize * 2; y += gap) {
      for (let x = -maxSize; x < maxSize * 2; x += gap * 2) {
        ctx.fillText(text, x, y)
      }
    }
  }

  // 创建水印容器
  const watermarkDiv = document.createElement('div')
  watermarkDiv.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-repeat: repeat;
    z-index: ${opts.zIndex};
  `
  watermarkDiv.style.backgroundImage = `url(${canvas.toDataURL('image/png')})`

  // 设置容器定位
  if (getComputedStyle(el).position === 'static') {
    el.style.position = 'relative'
  }

  // 添加水印
  el.appendChild(watermarkDiv)
  return watermarkDiv
}

export const vWatermarker: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const watermarkEl = createWatermark(el, binding.value || {})
    if (watermarkEl) {
      ;(el as any).__vWatermarker = watermarkEl
    }
  },

  updated(el: HTMLElement, binding: DirectiveBinding) {
    if ((el as any).__vWatermarker) {
      el.removeChild((el as any).__vWatermarker)
    }
    const watermarkEl = createWatermark(el, binding.value || {})
    if (watermarkEl) {
      ;(el as any).__vWatermarker = watermarkEl
    }
  },

  unmounted(el: HTMLElement) {
    if ((el as any).__vWatermarker) {
      el.removeChild((el as any).__vWatermarker)
      delete (el as any).__vWatermarker
    }
  }
}
