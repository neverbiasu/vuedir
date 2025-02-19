<template>
  <div class="demo-block">
    <span v-countup>3000</span>
  </div>
</template>

<style scoped>
.demo-block {
  padding: 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: var(--vp-c-bg);
}

.demo-block span {
  font-size: 24px;
  font-weight: bold;
  color: var(--vp-c-text-1);
}
</style>
