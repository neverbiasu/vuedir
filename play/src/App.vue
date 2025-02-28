<template>
  <div ref="targetRef">目标元素</div>
  <div></div>
  <span v-scrollTo="{ to: targetRef, duration: 1000, behavior: 'smooth' }">
    滚动到目标
  </span>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { vScrollTo } from "@cp-vuedir/core";

const targetRef = ref(null);
</script>

<style scoped>
div {
  height: 1000px;
  width: 100%;
  background-color: #f0f0f0;
}
</style>
