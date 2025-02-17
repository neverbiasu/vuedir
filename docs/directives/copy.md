# v-copy 指令

## 介绍

`v-copy` 指令用于实现对组件内容的复制功能。支持两种使用方式：隐式复制（使用元素的文本内容）和显式复制（指定要复制的内容）, 可以根据实际需求选择合适的方式;在复制成功或失败时，会有相应的反馈。

## 使用方法

### 隐式复制

当不指定 `v-copy` 的值时，将自动复制元素的文本内容：

```vue
<template>
  <p v-copy>这段文本将被复制</p>
</template>
```

### 显式复制

通过给 `v-copy` 指定一个值，可以复制指定的内容，而不是元素的文本内容：

```vue
<template>
  <button v-copy="copyText">点击复制</button>
</template>

<script setup>
import { ref } from "vue";

const copyText = ref("这是将被复制的内容");
</script>
```

## 示例

### 隐式复制示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { vCopy } from "@cp-vuedir/core";

const text = ref("这是一段可以直接复制的文本内容");
</script>

<template>
  <div class="demo-container">
    <div v-copy class="copy-text" title="点击复制">
      {{ text }}
    </div>
    <p class="demo-tip">点击上方文本区域即可复制文本内容（隐式复制）</p>
  </div>
</template>
```

点击文本区域，将直接复制元素文本内容。

<CopyDemo />

### 显式复制示例

点击按钮，将复制指定的文本内容，而不是元素的文本内容。

```vue
<script setup lang="ts">
import { ref } from "vue";
import { vCopy } from "@cp-vuedir/core";

const buttonText = ref("点击复制");
const copyText = ref("这是将被复制的内容");
</script>

<template>
  <div class="demo-container">
    <div class="content-display">预设文本内容：{{ copyText }}</div>
    <button v-copy="copyText" class="copy-button" title="点击复制">
      {{ buttonText }}
    </button>
    <p class="demo-tip">点击按钮复制预设的文本内容（显式复制）</p>
  </div>
</template>
```

<CopyDemoTo />

<script setup>
import CopyDemo from '../.vitepress/components/vCopy/CopyDemo.vue';
import CopyDemoTo from '../.vitepress/components/vCopy/CopyDemoTo.vue';
import ApiTable from '../.vitepress/components/ApiTable.vue';

const copyApi = [
  {
    name: 'value',
    description: '一键复制文本内容，支持动态文本和复制状态反馈',
    type: 'string | Ref<string>',
    required: false
  }
];
</script>

## 参数说明

<ApiTable :data="copyApi"/>

## 注意事项

::: tip 复制状态反馈

- 复制成功：文本内容将被复制到剪贴板，会短暂出现绿色阴影效果
- 复制失败：复制失败时，会短暂出现红色阴影效果

:::

::: warning 注意浏览器兼容
需要浏览器支持 `Clipboard API`
:::
