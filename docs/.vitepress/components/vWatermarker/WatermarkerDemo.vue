<template>
  <div class="watermarker-demo">
    <div class="demo-section">
      <h3>基础用法</h3>
      <div v-watermarker="{ text: '基础水印示例' }" class="watermark-box">
        <img src="/logo.jpg" alt="Logo" class="demo-image" />
      </div>
    </div>

    <div class="demo-section">
      <h3>水印方向</h3>
      <div class="direction-demos">
        <div
          v-watermarker="{
            text: '水平方向',
            direction: 'horizontal',
            fontSize: 14,
            opacity: 0.15,
          }"
          class="watermark-box"
        >
          <img src="/logo.jpg" alt="Logo" class="demo-image" />
        </div>

        <div
          v-watermarker="{
            text: '垂直方向',
            direction: 'vertical',
            fontSize: 14,
            opacity: 0.3,
          }"
          class="watermark-box"
        >
          <img src="/logo.jpg" alt="Logo" class="demo-image" />
        </div>

        <div
          v-watermarker="{
            text: '对角线方向',
            direction: 'diagonal',
            fontSize: 14,
            opacity: 0.4,
          }"
          class="watermark-box"
        >
          <img src="/logo.jpg" alt="Logo" class="demo-image" />
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h3>自定义样式</h3>
      <div
        v-watermarker="{
          text: 'VueDir',
          fontSize: 20,
          fontFamily: 'Arial',
          textColor: '#ff0000',
          opacity: 0.5,
          gap: 120,
        }"
        class="watermark-box"
      >
        <img src="/logo.jpg" alt="Logo" class="demo-image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { vWatermarker } from "@cp-vuedir/core";
</script>

<style scoped>
.watermarker-demo {
  border: 1px solid var(--vp-c-brand);
  border-radius: 8px;
  padding: 20px;
}

.demo-section {
  margin-bottom: 30px;
}

.demo-section h3 {
  margin-bottom: 15px;
  font-size: 16px;
  color: var(--vp-c-text-1);
}

.watermark-box {
  width: 100%;
  height: 200px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.demo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.direction-demos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

@media (max-width: 640px) {
  .direction-demos {
    grid-template-columns: 1fr;
  }
}
</style>
