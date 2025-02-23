<template>
  <div class="container">
    <h2>🎯 可编辑元素自动处理</h2>
    <p>输入框内不会触发快捷键：</p>
    <textarea placeholder="在这里输入，Enter 不会触发"></textarea>
    <input type="text" placeholder="输入框中也不会触发快捷键" />

    <p v-hotkey="{ key: 'enter', callback: handleEnter }">
      按 <kbd>Enter</kbd>（不在输入框时）
    </p>
    <p v-hotkey="{ key: 'ctrl+enter', callback: handleCtrlEnter }">
      按 <kbd>Ctrl + Enter</kbd>
    </p>
    <p v-hotkey="{ key: 'esc', callback: handleEsc }">按 <kbd>Esc</kbd></p>
  </div>
</template>

<script lang="ts" setup>
import { vHotkey } from "@cp-vuedir/core";

const handleEnter = () => alert("🚀 Enter 被按下！（仅限非输入框）");
const handleCtrlEnter = () => alert("✅ Ctrl + Enter 被按下！");
const handleEsc = () => alert("❌ Esc 被按下！");
</script>

<style scoped>
.container {
  text-align: center;
  font-family: Arial, sans-serif;
  margin-top: 50px;
}
textarea,
input {
  display: block;
  width: 80%;
  margin: 10px auto;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}
kbd {
  background: #333;
  color: #fff;
  padding: 3px 6px;
  border-radius: 4px;
}
</style>
