# v-focus 指令

`v-focus` 指令用于自动聚焦一个元素。当元素被挂载或更新时，它会自动获得焦点。这个指令特别适用于需要立即获得用户输入的场景，比如登录表单、搜索框或模态框中的输入字段。

## 基本用法

```vue
<template>
  <input v-focus type="text" />
</template>
```

## 使用场景

- 表单中需要自动聚焦的输入框
- 模态框打开时需要聚焦的元素
- 动态显示的搜索框

## 在线示例

<script setup>
import FocusDemo from '../.vitepress/components/vFocus/FocusDemo.vue';
</script>

<FocusDemo />

## 示例代码

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

## 工作原理

该指令通过 Vue 的自定义指令系统实现，在元素的 `mounted` 和 `updated` 生命周期钩子中调用元素的 `focus()` 方法。这确保了元素在首次渲染和后续更新时都能自动获得焦点。
