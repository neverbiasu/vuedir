# v-clearable

## 介绍

为输入框添加一个清除按钮，点击后可以快速清空内容。

## 基础用法

```vue
<template>
  <input v-clearable v-model="text" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const text = ref("");
</script>
```

## 示例

<ClearableDemo />

::: details 点击查看代码

<<< @/.vitepress/components/vClearable/ClearableDemo.vue

:::

<script setup>
import ClearableDemo from '../.vitepress/components/vClearable/ClearableDemo.vue'
</script>
