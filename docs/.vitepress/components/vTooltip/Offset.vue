<script setup lang="ts">
import { vTooltip, vRipple } from "@cp-vuedir/core";
</script>

<template>
  <div class="container">
    <button
      v-ripple="{
        color: '#10b981',
      }"
      v-tooltip="{
        text: '不如我们从头来过。',
        theme: 'light',
        offset: 30,
      }"
    >
      《春光乍泄》
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
