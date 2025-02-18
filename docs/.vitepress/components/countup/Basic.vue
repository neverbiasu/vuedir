<template>
  <div class="demo-block">
    <div class="mb-4">
      <h4>基础用法</h4>
      <span v-countup>1000</span>
    </div>

    <div class="mb-4">
      <h4>自定义持续时间 (duration=4)</h4>
      <span v-countup.duration-4>2000</span>
    </div>

    <div class="mb-4">
      <h4>自定义小数位数 (decimals=2)</h4>
      <span v-countup.decimals-2>1234.56</span>
    </div>

    <div class="mb-4">
      <h4>自定义起始值 (startVal=500)</h4>
      <span v-countup.startVal-500>1000</span>
    </div>

    <div class="mb-4">
      <h4>组合使用</h4>
      <span v-countup.duration-3.decimals-1.startVal-100>1500.5</span>
    </div>
  </div>
</template>

<script setup lang="ts">
// 示例组件
</script>

<style scoped>
.demo-block {
  padding: 1rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

h4 {
  margin-bottom: 0.5rem;
  color: #666;
  font-size: 1rem;
}

span {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
}
</style>