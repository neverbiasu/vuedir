<template>
  <button
    v-tooltip="{
      text: '这是一个提示',
      position: 'right',
      theme: 'light',
      showArrow: true,
      showDelay: 500,
      hideDelay: 500,
      offset: 10,
    }"
  >
    点击
  </button>
</template>

<script lang="ts" setup>
import { vTooltip } from "@cp-vuedir/core";
</script>
