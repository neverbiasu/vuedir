<script setup lang="ts">
import { vHighlight } from "@cp-vuedir/core";
</script>

<template>
  <div class="highlight-examples">
    <div v-highlight="'#ff0000'" class="highlight-item">简单红色背景</div>
    <p
      v-highlight="{ bgColor: '#ffff00', textColor: '#000000' }"
      class="highlight-item"
    >
      黄色背景黑色文字
    </p>
    <p v-highlight="{ bgColor: 'rgba(0, 0, 255, 0.5)', auto: true }">
      半透明蓝色背景自动匹配文字颜色
    </p>
  </div>
</template>

<style scoped>
.highlight-examples {
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 5px;
}
</style>
