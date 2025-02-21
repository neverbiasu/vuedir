<script setup lang="ts">
import { ref } from "vue";
import { vDrag } from "@cp-vuedir/core";

const containerRef = ref<HTMLElement | null>(null);
</script>

<template>
  <div class="drag_box" ref="containerRef">
    <button
      v-drag="{
        range: containerRef,
      }"
      class="drag"
    >
      Drag me
    </button>
  </div>
</template>

<style scoped>
.drag_box {
  padding: 10px;
  height: 40vh;
  border: 2px dashed var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg);
}

.drag {
  padding: 10px;
  border: 2px solid var(--vp-c-dividerr);
  color: var(--vp-c-brand);
  border-radius: 50%;
  background-color: var(--vp-c-sponsor);
}
</style>
