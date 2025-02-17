<script setup lang="ts">
import { ref } from "vue";
import { vCopy } from "@cp-vuedir/core";

const buttonText = ref("点击复制");
const copyText = ref("这是将被复制的内容");
</script>

<template>
  <div class="demo-container">
    <div class="content-display">预设文本内容：{{ copyText }}</div>
    <button v-copy="copyText" class="copy-button" title="点击复制">
      {{ buttonText }}
    </button>
    <p class="demo-tip">点击按钮复制预设的文本内容（显式复制）</p>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 1rem;
  border: 1px solid var(--vp-c-divider-light);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
}

.content-display {
  padding: 0.5rem;
  margin-bottom: 1rem;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  color: var(--vp-c-text-1);
}

.copy-button {
  padding: 0.5rem 1rem;
  background-color: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.copy-button:hover {
  background-color: var(--vp-c-brand-dark);
}

.demo-tip {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}
</style>
