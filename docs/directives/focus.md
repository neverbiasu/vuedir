# v-focus 指令

<script setup>
import FocusDemo from '../.vitepress/components/vFocus/FocusDemo.vue';
import ApiTable from '../.vitepress/components/ApiTable.vue';

const directiveData = [{
  name: 'value',
  description: '是否启用自动聚焦',
  type: 'boolean',
  required: false,
  default: 'true'
}];

const lifecycleData = [{
  name: 'mounted',
  description: '元素被挂载时自动聚焦',
  type: 'hook',
  required: true,
  default: '-'
}, {
  name: 'updated',
  description: '元素更新时自动聚焦',
  type: 'hook',
  required: true,
  default: '-'
}];

const eventData = [{
  name: 'focus',
  description: '元素获得焦点时触发',
  type: 'event',
  required: false,
  default: '-'
}, {
  name: 'blur',
  description: '元素失去焦点时触发',
  type: 'event',
  required: false,
  default: '-'
}];
</script>

## 基础用法

<FocusDemo />

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

## API

### 生命周期

<ApiTable :data="lifecycleData" />

## 功能说明

- 支持在元素挂载时自动聚焦
- 支持在元素更新时自动聚焦
- 适用于表单输入框、模态框等场景
- 支持动态控制是否启用聚焦功能

### 注意事项

- 仅适用于可获得焦点的元素（如 input、textarea 等）
- 在同一页面中同时只能有一个元素获得焦点
