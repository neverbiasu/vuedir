<template>
  <div class="pwdvisible-demo">
    <input
      type="password"
      v-pwdvisible
      placeholder="请输入密码"
      class="password-input"
    />
  </div>
</template>

<script setup>
import { vPwdvisible } from "@cp-vuedir/core";
</script>

<style scoped>
.pwdvisible-demo {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.password-input {
  width: 300px;
  padding: 8px 35px 8px 12px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  font-size: 14px;
  color: #606266;
  transition: border-color 0.2s;
}

.password-input:focus {
  outline: none;
  border-color: #409eff;
}

.password-input::placeholder {
  color: #c0c4cc;
}
</style>
