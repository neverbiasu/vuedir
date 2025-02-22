<script setup lang="ts">
import { vRipple } from "@cp-vuedir/core";
</script>

<template>
  <div
    v-ripple="{
      color: 'red',
      duration: 2000,
    }"
    class="ripple-div"
  >
    人生，哪有事事如意，生活，哪有样样顺心。所以，不和别人较真，因为不值得，不和自己较真，因为伤不起，不和往事较真，因为输不起。
  </div>
</template>

<style scoped>
.ripple-div {
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  border-radius: 4px;
}
</style>
