<template>
  <div class="demo-block">
    <span v-countup>1000</span>
  </div>
</template>

<script setup>
// 基础用法示例组件
</script>

<style scoped>
.demo-block {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.demo-block span {
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
}
</style>