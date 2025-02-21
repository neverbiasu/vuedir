<script setup lang="ts">
import { vRipple } from "@cp-vuedir/core";
</script>

<template>
  <p
    v-ripple="{
      color: 'red',
    }"
    class="ripple-p"
  >
    很多时候，绝对不是你付出一盏，必定收获一盅。时光的仰首间，生命的起伏间，有多少世事，能如清水滴石般的清透;又有多少故事，都能书写完美的结局。
  </p>
</template>

<style scoped>
.ripple-p {
  padding: 10px 20px;
  font-size: 16px;
  border: 2px dashed var(--vp-c-brand);
  border-radius: 8px;
}
</style>
