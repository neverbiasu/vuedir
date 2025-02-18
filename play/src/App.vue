<script setup lang="ts">
import { vLongpress, vHighlight } from "@cp-vuedir/core";

const handleLongPress = () => {
  alert("长按事件触发了！");
};

const handleCustomLongPress = () => {
  alert("自定义时长的长按事件触发了！");
};
</script>

<template>
  <div class="container">
    <h1>VueDir Playground</h1>
    <div class="demo-section">
      <h2>v-longpress 指令演示</h2>
      <p>默认长按时间为2秒</p>
      <button v-longpress="{ event: handleLongPress }" class="demo-button">
        按住我2秒
      </button>

      <p>自定义长按时间为1秒</p>
      <button
        v-longpress="{ event: handleCustomLongPress, delay: 1000 }"
        class="demo-button"
      >
        按住我1秒
      </button>
    </div>

    <div class="demo-section">
      <h2>v-highlight 指令演示</h2>
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
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
}

.demo-section {
  margin-top: 2rem;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

input {
  width: 100%;
  padding: 0.5rem;
  margin: 1rem 0;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.copy-text {
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 4px;
  cursor: pointer;
  user-select: all;
}

.highlight-examples {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.demo-button {
  padding: 10px 20px;
  margin: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.demo-button:hover {
  background-color: #45a049;
}

.highlight-item {
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
}
</style>
