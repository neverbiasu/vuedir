<template>
  <div class="demo-block">
    <div class="modifier-example">
      <h4>链式传参</h4>
      <div v-highlight.bgColor-red.textColor-blue.auto-true>
        这是一段带有背景色和文本颜色的文本，但是设置了自动匹配颜色，所以文本颜色不会是蓝色的。
      </div>
    </div>
  </div>
</template>

<script setup>
import { vHighlight } from "@cp-vuedir/core";
</script>

<style scoped>
.demo-block {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.modifier-example {
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 4px;
}

.modifier-example h4 {
  margin: 0 0 10px 0;
  color: #666;
  font-size: 14px;
}

.modifier-example div {
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
}
</style>
