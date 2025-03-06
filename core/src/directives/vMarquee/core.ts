import type { Directive, DirectiveBinding } from 'vue'
import { MarqueeDirection, MarqueeCallback, MarqueeElement, MarqueeOptions, MarqueeScrollCallback } from './type'

export const vMarquee: Directive = {
    mounted(el: MarqueeElement, binding: DirectiveBinding<MarqueeOptions>) {
        const options: MarqueeOptions = binding.value || {}
        const {
            direction = 'x',
            speed = 50,
            onStart,
            onScroll,
            onComplete
        } = options

        // 创建内容包裹元素
        const wrapper = document.createElement('div')
        wrapper.style.display = 'inline-block'

        // 将原始内容移动到包裹元素中
        while (el.firstChild) {
            wrapper.appendChild(el.firstChild)
        }
        el.appendChild(wrapper)

        // 设置容器样式
        el.style.overflow = 'hidden'
        if (direction === 'x') {
            el.style.whiteSpace = 'nowrap'
        }

        // 计算滚动距离
        const containerSize = direction === 'x' ? el.clientWidth : el.clientHeight
        const contentSize = direction === 'x' ? wrapper.scrollWidth : wrapper.scrollHeight
        const distance = contentSize - containerSize

        const distanceNumber = Number(distance)

        if (distanceNumber <= 0) return // 如果内容小于容器，则不进行滚动

        const duration = (distanceNumber / speed) * 1000 // 转化为毫秒

        const animate = (timestamp: number) => {
            if (!el._marquee?.isMounted) return

            const marqueeData = el._marquee
            if (!marqueeData.startTime) {
                marqueeData.startTime = timestamp
                onStart?.()
            }

            const elapsed = timestamp - marqueeData.startTime
            const progress = Math.min(elapsed / duration, 1)

            // 更新位置
            // const translateValue = -progress * distanceNumber
            // wrapper.style.transform = `translate${direction.toUpperCase()}(${translateValue}px)`

            // 计算位移值（支持往返）
            const currentProgress = marqueeData.isReversed ? 1 - progress : progress
            const translateValue = -currentProgress * distanceNumber
            wrapper.style.transform = `translate${direction.toUpperCase()}(${translateValue}px)`

            // 触发滚动中回调
            onScroll?.(progress)

            if (progress < 1) {
                marqueeData.rafId = requestAnimationFrame(animate)
            } else {
                // 滚动完成
                onComplete?.()

                // 重置位置并重新开始
                // wrapper.style.transform = `translateX(0)`
                // void wrapper.offsetWidth // 强制重绘

                // 切换滚动方向
                marqueeData.isReversed = !marqueeData.isReversed
                marqueeData.startTime = null

                // 准备下一次动画
                marqueeData.rafId = requestAnimationFrame(animate)
                onStart?.()
            }
        }

        // 保存状态，以便在组件销毁时清理
        el._marquee = {
            wrapper,
            options,
            rafId: requestAnimationFrame(animate),
            startTime: null,
            isMounted: true,
            isReversed: false,
            distance
        }
    },
    updated(el: MarqueeElement, binding: DirectiveBinding<MarqueeOptions>) {
        if (el._marquee) {
            // 保留当前滚动状态
            const wasReversed = el._marquee.isReversed
            const currentProgress = el._marquee.startTime
                ? (performance.now() - el._marquee.startTime) / ((el._marquee.distance / el._marquee.options.speed!) * 1000)
                : 0

            // 清理旧状态
            cancelAnimationFrame(el._marquee.rafId || 0)
            el._marquee.isMounted = false

            // 恢复原始内容
            const wrapper = el._marquee.wrapper
            while (wrapper.firstChild) {
                el.appendChild(wrapper.firstChild)
            }
            wrapper.remove()

            // 重新初始化
            this.mounted(el, binding)

            // 恢复滚动状态
            if (el._marquee) {
                el._marquee.isReversed = wasReversed
                el._marquee.startTime = performance.now() - currentProgress * ((el._marquee.distance / el._marquee.options.speed!) * 1000)
            }
        }
    },
    unmounted(el: MarqueeElement) {
        // 清理状态
        if (el._marquee) {
            cancelAnimationFrame(el._marquee.rafId || 0)
            el._marquee.isMounted = false
            const wrapper = el._marquee.wrapper
            while (wrapper.firstChild) {
                el.appendChild(wrapper.firstChild)
            }
            wrapper.remove()
            delete el._marquee
        }
    }
}