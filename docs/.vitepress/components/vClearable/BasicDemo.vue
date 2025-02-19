<template>
  <div class="basic-demo">
    <input
      v-clearable
      v-model="text"
      placeholder="我甚至连他的一张照片都没有，他只活在我的记忆里。———《泰坦尼克号》"
      class="clearable-input"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { vClearable } from "@cp-vuedir/core";

const text = ref("");
</script>

<style scoped>
.basic-demo {
  border: 1px solid var(--vp-c-brand);
  border-radius: 8px;
  padding: 20px;
}

.clearable-input {
  width: 100%;
  padding: 8px 35px 8px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  font-size: 14px;
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg);
  transition: border-color 0.2s;
}

.clearable-input:focus {
  outline: none;
  border-color: var(--vp-c-brand);
}

.clearable-input::placeholder {
  color: var(--vp-c-text-3);
}
</style>