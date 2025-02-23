<template>
  <div class="container">
    <h2>🎯 多键组合快捷键监听</h2>
    <p>尝试按：</p>
    <ul>
      <li><kbd>Ctrl</kbd> + <kbd>Enter</kbd> → 提交</li>
      <li><kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>ArrowUp</kbd> → 上移</li>
      <li>
        <kbd>Cmd</kbd> + <kbd>S</kbd> / <kbd>Ctrl</kbd> + <kbd>S</kbd> → 保存
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { vHotkey } from "@cp-vuedir/core";

const handleSubmit = () => alert("🚀 提交成功！");
const handleMoveUp = () => alert("⬆️ 元素已上移！");
const handleSave = (event: Event) => {
  event.preventDefault(); // 阻止浏览器默认保存行为
  alert("✅ 自定义保存操作！");
};
</script>

<style scoped>
.container {
  text-align: center;
  font-family: Arial, sans-serif;
  margin-top: 50px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  background: #f1f1f1;
  display: inline-block;
  padding: 10px;
  margin: 5px;
  border-radius: 6px;
}
kbd {
  background: #333;
  color: #fff;
  padding: 3px 6px;
  border-radius: 4px;
}
</style>
