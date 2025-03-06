import type { DirectiveBinding } from 'vue'
import type { MouseFollowDirective, MouseFollowHTMLElement } from './type'

export const vMouseFollow: MouseFollowDirective = {
  mounted(el: MouseFollowHTMLElement, binding: DirectiveBinding<boolean | undefined>) {
    // 设置元素的初始样式
    el.style.position = 'fixed'
    el.style.pointerEvents = 'none'
    
    // 鼠标移动处理函数
    const handler = (event: MouseEvent) => {
      const { clientX, clientY } = event
      const { width, height } = el.getBoundingClientRect()
      
      // 计算元素位置,使其中心点跟随鼠标
      const x = clientX - width / 2
      const y = clientY - height / 2
      
      // 设置元素位置
      el.style.left = `${x}px`
      el.style.top = `${y}px`
    }

    // 保存处理函数引用以便后续清理
    el.__mousemoveHandler = handler
    document.addEventListener('mousemove', handler)
  },

  unmounted(el: MouseFollowHTMLElement) {
    // 清理事件监听
    if (el.__mousemoveHandler) {
      document.removeEventListener('mousemove', el.__mousemoveHandler)
      delete el.__mousemoveHandler
    }
  }
} 