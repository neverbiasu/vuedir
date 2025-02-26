<template>
    <div class="demo-container">
        <p v-autoresize class="autoresize-text-1">
            这是测试文字这是测试文字这是测试文字这是测试文字这是
            测试文字这是测试文字这是测试文字这是测试文字这是测试文
            字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字
        </p>
        <p v-autoresize class="autoresize-text-2">
            这是测试文字这是测试文字这是测试文字这是测试文字这是
            测试文字这是测试文字这是测试文字这是测试文字这是测试文
            字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字
        </p>
    </div>
</template>
<script setup>
import { vAutoresize } from "@cp-vuedir/core"
</script>
<style scoped>
.demo-container {
    width: 100%;
    height: 300px;
}

.autoresize-text-1 {
    width: 100%;
    height: 60%;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 10px;
}

.autoresize-text-2 {
    width: 100%;
    height: 35%;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 10px;
}
</style>
