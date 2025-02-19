<template>
  <div v-doubleClick="handleDoubleClick" class="double-click-box">
    双击计数：{{ count }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { vDoubleClick } from "@cp-vuedir/core";

const count = ref(0);

const handleDoubleClick = () => {
  count.value++;
};
</script>

<style scoped>
.double-click-box {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
}
</style>
