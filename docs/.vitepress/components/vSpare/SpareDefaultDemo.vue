<template>
  <div class="demo-container">
    <div class="demo-item">
      <img
        src="https://example.com/non-existent-image.jpg"
        v-spare
        alt="默认SVG加载失败示例"
        class="demo-image"
      />
    </div>
  </div>
</template>

<script setup>
import { vSpare } from "@cp-vuedir/core";
</script>

<style scoped>
.demo-container {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.demo-item {
  text-align: center;
}

.demo-image {
  max-width: 20%;
  height: auto;
  border: 1px solid #eee;
  border-radius: 4px;
}
</style>
