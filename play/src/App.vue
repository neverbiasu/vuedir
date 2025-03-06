<script setup lang="ts">
import { vDesaturate } from '@cp-vuedir/core'
import { ref } from 'vue'

const isOn = ref(true)
</script>

<template>
  <div class="container">
    你好
    <button v-desaturate="{ isOn: isOn }" @click="isOn = !isOn">纪念模式开启</button>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: green;
}
</style>
