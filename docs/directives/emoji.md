# v-emoji

## 简介

`v-emoji` 指令用于在文本中禁止用户插入表情符号，输入的 emoji 不会生效。

## 使用方法

通过给元素添加 `v-emoji` 指令来禁止用户输入表情符号。

<BasicDemo />

::: details 查看代码

<<< @/.vitepress/components/vEmoji/BasicDemo.vue

:::

## 注意事项

::: warning 注意

- 该指令只能用于 `input` 或 `textarea` 元素，不可用于组件。

:::

<script setup>
import BasicDemo from "../.vitepress/components/vEmoji/BasicDemo.vue"
</script>
