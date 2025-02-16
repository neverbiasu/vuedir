<script setup lang="ts">
import { ref } from "vue";

const disabledText = ref("这是一段无法复制的文本");
</script>

<template>
  <div class="demo-container">
    <div class="copy-text" title="无法复制" style="user-select: none">
      {{ disabledText }}
    </div>
    <p class="demo-tip">这是一个禁用了文本选择功能的示例，无法进行复制操作</p>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 1rem;
  border: 1px solid var(--vp-c-divider-light);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
}

.copy-text {
  padding: 1rem;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  margin-bottom: 1rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: not-allowed;
}

.copy-text:hover {
  background-color: var(--vp-c-bg-soft);
  border-color: var(--vp-c-danger);
  box-shadow: 0 0 10px var(--vp-c-danger-dimm);
}

.demo-tip {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}
</style>
