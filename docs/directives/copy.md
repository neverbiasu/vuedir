# v-copy 指令

## 基本用法

```vue
<template>
  <div v-copy="text">{{ text }}</div>
</template>

<script setup>
import { ref } from "vue";

const text = ref("点击复制这段文本");
</script>
```

## 在线示例

### 复制成功示例

<script setup>
import CopyDemo from '../.vitepress/components/vCopy/CopyDemo.vue';
import CopyDemoFail from '../.vitepress/components/vCopy/CopyDemoFail.vue';
</script>

<CopyDemo />

### 复制失败示例

<CopyDemoFail />

## 功能说明

`v-copy` 指令用于实现点击复制功能。当用户点击绑定了该指令的元素时，会自动将绑定的文本内容复制到剪贴板。

### 特性

- 支持动态文本内容
- 复制成功时组件会动态显示绿色边框与阴影
- 复制失败时组件会动态显示红色边框与阴影
- 自动添加鼠标手型样式

### 注意事项

- 需要浏览器支持 Clipboard API
- 复制失败时会在控制台输出错误信息
