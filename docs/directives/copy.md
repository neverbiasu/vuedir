# v-copy 指令

## 介绍

`v-copy` 指令用于实现对组件内容的复制功能。

## 使用方法

```vue
<template>
  <div v-copy>{{ text }}</div>
</template>
```

#### 复制成功示例

复制成功是会短暂显示绿色边框与阴影。

<CopyDemo />

#### 复制失败示例

复制失败是会短暂显示红色边框与阴影。

<CopyDemoFail />

<script setup>
import CopyDemo from '../.vitepress/components/vCopy/CopyDemo.vue';
import CopyDemoFail from '../.vitepress/components/vCopy/CopyDemoFail.vue';
</script>

## 注意事项

::: warning 注意浏览器兼容
需要浏览器支持 `Clipboard API`
:::
