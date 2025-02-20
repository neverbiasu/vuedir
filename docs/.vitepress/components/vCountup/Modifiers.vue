<template>
  <div class="demo-block">
    <div class="modifier-example">
      <h4>持续时间 (duration)</h4>
      <span v-countup.duration-3>1000</span>
    </div>

    <div class="modifier-example">
      <h4>小数位数 (decimals)</h4>
      <span v-countup.decimals-2>1500.99</span>
    </div>

    <div class="modifier-example">
      <h4>起始值 (startVal)</h4>
      <span v-countup.startVal-3000>5173</span>
    </div>

    <div class="modifier-example">
      <h4>组合使用</h4>
      <span v-countup.duration-3.decimals-2.startVal-100>5173.99</span>
    </div>
  </div>
</template>

<style scoped>
.demo-block {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.modifier-example {
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 4px;
}

.modifier-example h4 {
  margin: 0 0 10px 0;
  color: #666;
  font-size: 14px;
}

span {
  font-size: 24px;
  color: #409eff;
}
</style>
