<script setup lang="ts">
import { ref } from "vue";

const message = ref("");
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
</style>
