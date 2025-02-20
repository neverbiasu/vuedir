<script setup lang="ts">
import { vPwdvisible } from "@cp-vuedir/core";
</script>

<template>
  <div class="container">
    <h1>VueDir Playground</h1>
    <div>
      <input type="password" v-pwdvisible />
    </div>
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
