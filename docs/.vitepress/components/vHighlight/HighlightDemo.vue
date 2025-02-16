<script setup lang="ts">
import { vHighlight } from "@cp-vuedir/core";

const basicExample = "rgb(241,115,19)";
const customTextExample = {
  bgColor: "#8FCC21",
  textColor: "#ffffff",
};
const autoTextExample = {
  bgColor: "#447DFC",
  auto: true,
};
</script>

<template>
  <div class="demo-container">
    <div class="demo-section">
      <h3>基础用法</h3>
      <p v-highlight="basicExample">简单的红色背景高亮效果</p>
    </div>

    <div class="demo-section">
      <h3>自定义文字颜色</h3>
      <p v-highlight="customTextExample">红色背景白色文字效果</p>
    </div>

    <div class="demo-section">
      <h3>自动文字颜色</h3>
      <p v-highlight="autoTextExample">黄色背景自动计算文字颜色效果</p>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.demo-section {
  margin-bottom: 1.5rem;
}

.demo-section:last-child {
  margin-bottom: 0;
}

.demo-section h3 {
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  color: #666;
}

.demo-section div[v-highlight] {
  padding: 1rem;
  border-radius: 4px;
  margin-top: 0.5rem;
  padding: 2px;
}
</style>
