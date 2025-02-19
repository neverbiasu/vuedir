# v-copy 指令

## 介绍

`v-copy` 指令用于实现对组件内容的复制功能。当用户点击带有该指令的元素时，会自动复制元素的文本内容到剪贴板，并在复制成功或失败时提供相应的反馈。

## 使用方法

将 `v-copy` 指令添加到需要支持复制功能的元素上：

```vue
<template>
  <p v-copy>这段文本将被复制</p>
</template>
```

## 示例

点击文本区域，将直接复制元素文本内容。

<CopyDemo />

::: details 查看代码
<<< @/.vitepress/components/vCopy/CopyDemo.vue
:::

<script setup>
import CopyDemo from '../.vitepress/components/vCopy/CopyDemo.vue';
</script>

## 注意事项

::: tip 复制状态反馈

- 当复制成功时，会在元素上显示一个绿色的提示信息。
- 当复制失败时，会在元素上显示一个红色的提示信息。

:::

::: warning 注意浏览器兼容
需要浏览器支持 `Clipboard API`
:::
