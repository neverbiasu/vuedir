<script setup lang="ts">
import { ref } from "vue";

const message = ref("");
const copyText = ref("点击复制这段文本");
</script>

<template>
  <div class="container">
    <h1>VueDir Playground</h1>
    <div class="demo-section">
      <h2>v-focus 指令演示</h2>
      <input
        v-focus
        v-model="message"
        type="text"
        placeholder="这个输入框将自动获得焦点"
      />
      <p>当前输入内容: {{ message }}</p>
    </div>

    <div class="demo-section">
      <h2>v-copy 指令演示</h2>
      <div v-copy="copyText" class="copy-text" title="点击复制">
        {{ copyText }}
      </div>
      <p>点击上方文本即可复制内容</p>
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
  border: 1px solid #ccc;
  border-radius: 4px;
}

h1 {
  color: #2c3e50;
  text-align: center;
}

h2 {
  color: #42b883;
  margin-bottom: 1rem;
}

.copy-text {
  padding: 1rem;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 1rem 0;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.copy-text:hover {
  background-color: #f0f0f0;
  border-color: #42b883;
}
</style>
