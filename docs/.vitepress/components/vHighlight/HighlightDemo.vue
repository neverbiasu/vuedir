<script setup lang="ts">
import { vHighlight } from "@cp-vuedir/core";
</script>

<template>
  <div class="highlight-examples">
    <div v-highlight="'#ff0000'" class="highlight-item">简单红色背景</div>
    <div
      v-highlight="{ bgColor: '#ffff00', textColor: '#000000' }"
      class="highlight-item"
    >
      黄色背景黑色文字
    </div>
    <div
      v-highlight="{ bgColor: 'rgba(0, 0, 255, 0.5)', auto: true }"
      class="highlight-item"
    >
      半透明蓝色背景自动文字颜色
    </div>
  </div>
</template>

<style scoped>
.highlight-examples {
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.highlight-item {
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
}
</style>
