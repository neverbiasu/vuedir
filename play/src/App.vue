<script setup lang="ts">
import { vCountup } from "@cp-vuedir/core";
</script>

<template>
  <div class="container">
    <span v-countup>1222.99999</span>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
