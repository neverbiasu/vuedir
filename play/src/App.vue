<script setup lang="ts">
import { ref } from "vue";
import { vDrag } from "@cp-vuedir/core";

const containerRef = ref<HTMLElement | null>(null);
const startDrag = () => {
  console.log("Start Dragging...");
};
const endDrag = () => {
  console.log("End Dragging...");
};
const onDrag = () => {
  console.log("Dragging...");
};
</script>

<template>
  <div ref="containerRef" class="container">
    <div
      class="drag"
      v-drag="{
        range: containerRef,
        startDrag: startDrag,
        onDrag: {
          event: onDrag,
          throttle: 100,
        },
        endDrag: endDrag,
      }"
    >
      Drag me
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 50vw;
  height: 50vh;
  background-color: #f0f0f0;
  border: 2px dashed #ccc;
  border-radius: 8px;
  position: relative;
}

.drag {
  width: 50px;
  height: 50px;
  background-color: var();
  border-radius: 50%;
  cursor: pointer;
  text-align: center;
  user-select: none;
  position: absolute;
}
</style>
