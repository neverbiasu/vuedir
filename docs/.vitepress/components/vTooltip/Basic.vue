<script setup lang="ts">
import { vTooltip, vRipple } from "@cp-vuedir/core";
</script>

<template>
  <div class="container">
    <button
      v-ripple
      v-tooltip="{ text: '你好吗？ 我很好。', position: 'right' }"
    >
      《情书》
    </button>
    <button
      v-ripple
      v-tooltip="{
        text: '世界上所有的生命都在微妙的平衡中生存。',
        position: 'top',
      }"
    >
      《狮子王》
    </button>
    <button
      v-ripple
      v-tooltip="{
        text: '人的价值，不在于他得到什么，而是他可以给予别人什么。',
        position: 'bottom',
      }"
    >
      《被嫌弃的松子的一生》
    </button>
    <button
      v-ripple
      v-tooltip="{
        text: '你永远也不晓得自己有多喜欢一个人，除非你看见他和别的人在一起！',
        position: 'left',
      }"
    >
      《天使爱美丽》
    </button>
  </div>
</template>

<style scoped>
.container {
  border: 2px solid var(--vp-c-brand);
  padding: 20px;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

button {
  padding: 10px 20px;
  background-color: var(--vp-button-bg);
  border: 1px solid var(--vp-c-brand);
  color: var(--vp-c-text-1);
  border-radius: 8px;
}
</style>
