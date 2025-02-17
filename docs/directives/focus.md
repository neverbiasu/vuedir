# v-focus 指令

## 介绍

`v-focus` 指令用于自动将元素聚焦到页面上。

<script setup>
import FocusDemo from '../.vitepress/components/vFocus/FocusDemo.vue';
</script>

## 使用方法

```vue
<script setup lang="ts">
import { ref } from "vue";

const message = ref("");
</script>

<template>
  <div>
    <input
      v-focus
      v-model="message"
      type="text"
      placeholder="这个输入框将自动获得焦点"
    />
    <p>当前输入内容: {{ message }}</p>
  </div>
</template>
```

<FocusDemo />

### 注意事项

::: warning 注意

- 仅适用于可获得焦点的元素（如 `input`、`textarea` 等）

:::

::: danger 警告

- 在同一页面中同时只能有一个元素获得焦点

:::
