# v-focus 指令

## 介绍

`v-focus` 指令用于自动将元素聚焦到页面上。

<script setup>
import FocusDemo from '../.vitepress/components/vFocus/FocusDemo.vue';
</script>

## 使用方法

将 `v-focus` 指令添加到需要自动聚焦的元素上：

<FocusDemo />

### 注意事项

::: warning 注意

- 仅适用于可获得焦点的元素（如 `input`、`textarea` 等）

:::

::: danger 警告

- 在同一页面中同时只能有一个元素获得焦点

:::
