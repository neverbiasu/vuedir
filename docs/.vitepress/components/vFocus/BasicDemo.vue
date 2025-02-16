<script setup lang="ts">
// 基础用法演示组件
</script>

<template>
  <div class="demo-container">
    <input v-focus type="text" placeholder="这个输入框将自动获得焦点" />
  </div>
</template>

<style scoped>
.demo-container {
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background-color: var(--vp-c-bg-soft);
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  outline: none;
}

input:focus {
  border-color: var(--vp-c-brand);
}
</style>
