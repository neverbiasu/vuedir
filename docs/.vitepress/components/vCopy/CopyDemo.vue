<script setup lang="ts">
import { ref, getCurrentInstance } from "vue";
import { vCopy } from "@cp-vuedir/core";

// 注册指令
const vueApp = getCurrentInstance();
if (vueApp) {
  vueApp.appContext.app.directive("copy", vCopy);
}

const text = ref("点击复制这段文本");
</script>

<template>
  <div class="demo-container">
    <div v-copy="text" class="copy-text" title="点击复制">
      {{ text }}
    </div>
    <p class="demo-tip">点击上方文本即可复制内容</p>
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
}

.copy-text:hover {
  background-color: #f0f0f0;
  border-color: #4caf50;
}

.demo-tip {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
  text-align: center;
}
</style>
