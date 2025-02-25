<script setup lang="ts">
import { vTooltip, vRipple } from "@cp-vuedir/core";
</script>

<template>
  <div class="container">
    <button
      v-ripple
      v-tooltip="{ text: '皇上是世界上最寂寞的孩子。', position: 'right' }"
    >
      《末代皇帝》
    </button>
    <button
      v-ripple
      v-tooltip="{
        text: '如果我没有刀，我就不能保护你。如果我有刀，我就不能拥抱你。',
        position: 'top',
        theme: 'light',
      }"
    >
      《剪刀手爱德华》
    </button>
  </div>
</template>

<style scoped>
.container {
  border: 2px solid var(--vp-c-brand);
  padding: 20px;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

button {
  padding: 10px 20px;
  background-color: var(--vp-button-bg);
  border: 1px solid var(--vp-c-brand);
  color: var(--vp-c-text-1);
  border-radius: 8px;
}
</style>
