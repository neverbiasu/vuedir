<script setup lang="ts">
import { vEllipsis } from "@cp-vuedir/core";
</script>

<template>
  <p v-ellipsis="{ lines: 2 }">
    人生，哪有事事如意，生活，哪有样样顺心。所以，不和别人较真，因为不值得，不和自己较真，因为伤不起，不和往事较真，因为输不起。
  </p>
</template>

<style scoped>
p {
  width: 100%;
}
</style>
