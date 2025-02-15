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
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.copy-text {
  padding: 1rem;
  background-color: #fff;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: not-allowed;
}

.copy-text:hover {
  background-color: #f0f0f0;
  border-color: #ff4d4f;
  box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
}

.demo-tip {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}
</style>
