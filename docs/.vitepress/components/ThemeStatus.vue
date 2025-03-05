<script>
import { onMounted, onUnmounted, ref } from 'vue'

export default {
  name: 'ThemeStatus',
  setup() {
    const isDark = ref(false)

    const checkTheme = () => {
      isDark.value = document.documentElement.classList.contains('dark')
    }

    let observer = null

    onMounted(() => {
      checkTheme()
      // 使用MutationObserver监听类名变化
      observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            checkTheme()
          }
        })
      })

      // 开始监听文档根元素
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
      })
    })

    onUnmounted(() => {
      // 停止监听
      if (observer) {
        observer.disconnect()
      }
    })

    return {
      isDark
    }
  }
}
</script>

<template>
  <div class="theme-status">当前主题: {{ isDark ? '深色模式' : '浅色模式' }}</div>
</template>

<style scoped>
.theme-status {
  font-size: 12px;
  color: var(--vp-c-text-2);
  text-align: right;
  margin: -10px 0 15px;
}
</style>
