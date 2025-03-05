<script setup lang="ts">
import { ref } from 'vue'
import { vDrag } from '@cp-vuedir/core'

const containerRef = ref<HTMLElement | null>(null)
</script>

<template>
  <div class="drag_box" ref="containerRef">
    <a-button
      v-drag="{
        range: containerRef
      }"
      type="primary"
      shape="round"
    >
      Drag me
    </a-button>
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
</style>
