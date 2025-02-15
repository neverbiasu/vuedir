<script setup lang="ts">
import { ref, getCurrentInstance } from "vue";
import { vFocus } from "@cp-vuedir/core";

// 注册指令
const vueApp = getCurrentInstance();
if (vueApp) {
  vueApp.appContext.app.directive("focus", vFocus);
}

const message = ref("");
</script>

<template>
  <div class="demo-container">
    <input
      v-focus
      v-model="message"
      type="text"
      placeholder="这个输入框将自动获得焦点"
      class="demo-input"
    />
    <p class="demo-text">当前输入内容: {{ message }}</p>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.demo-input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  color: #333;
  border-radius: 4px;
  font-size: 1rem;
}

.demo-input:focus {
  outline: none;
  border-color: #4caf50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
}

.demo-text {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}
</style>
