<script setup lang="ts">
import { vTooltip, vRipple } from "@cp-vuedir/core";
</script>

<template>
  <div class="container">
    <button
      v-ripple
      v-tooltip="{
        text: '不顺心的时候，你可以像疯狗那样发狂，你可以破口大骂，诅咒命运。但到头来，还是得放手。',
        showDelay: 500,
      }"
    >
      《本杰明•巴顿奇事》
    </button>
    <button
      v-ripple
      v-tooltip="{
        text: '酒要一口一口地喝，路要一步一步地走。步子迈大了，容易扯着蛋！',
        hideDelay: 500,
      }"
    >
      《让子弹飞》
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
