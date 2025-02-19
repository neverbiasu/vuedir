<template>
  <div class="debounce-demo">
    <h3>按钮防抖示例</h3>
    <button v-debounce="handleClick" class="demo-button">点击按钮</button>
    <div class="result">点击次数：{{ clickCount }}</div>
  </div>
</template>

<script setup>
import { vDebounce } from "@cp-vuedir/core";
import { ref } from "vue";

const clickCount = ref(0);

const handleClick = () => {
  clickCount.value++;
};
</script>

<style scoped>
.debounce-demo {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.demo-button {
  padding: 8px 16px;
  background-color: var(--vp-c-brand);
  color: var(--vp-c-bg);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 8px 0;
}

.demo-button:hover {
  background-color: var(--vp-c-brand-dark);
}

.result {
  margin-top: 8px;
  color: var(--vp-c-text-2);
  font-size: 0.9em;
}

h3 {
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-1);
}
</style>
