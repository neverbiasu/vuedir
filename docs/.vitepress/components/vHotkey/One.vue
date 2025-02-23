<template>
  <div class="container">
    <h2>🎯 单键快捷键监听</h2>
    <p>尝试按 <strong>Space / Enter / Esc</strong></p>
    <div class="box">
      <p v-hotkey="{ key: 'space', callback: handleSpace }">
        按 <kbd>Space</kbd>
      </p>
      <p v-hotkey="{ key: 'enter', callback: handleEnter }">
        按 <kbd>Enter</kbd>
      </p>
      <p v-hotkey="{ key: 'esc', callback: handleEsc }">按 <kbd>Esc</kbd></p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { vHotkey } from "@cp-vuedir/core";

const handleSpace = () => alert("🚀 Space 被按下！");
const handleEnter = () => alert("✅ Enter 被按下！");
const handleEsc = () => alert("❌ Esc 被按下！");
</script>

<style scoped>
.container {
  text-align: center;
  font-family: Arial, sans-serif;
  margin-top: 50px;
}
.box {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  width: 250px;
  margin: auto;
}
kbd {
  background: #333;
  color: #fff;
  padding: 3px 6px;
  border-radius: 4px;
}
</style>
