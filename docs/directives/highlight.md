# v-highlight 指令

## 介绍

`v-highlight` 指令用于为元素添加背景高亮效果。

## 使用方法

### 基础用法

传入一个有效的高亮颜色值，即可为元素添加背景高亮效果。

```vue
<template>
  <div v-highlight="'#ff0000'">红色背景高亮</div>
</template>
```

### 扩展用法

1. 字符串颜色值，支持以下颜色值类型：

- RGB: 如`rgb(255, 0, 0)`
- RGBA: 如`rgba(255, 0, 0, 0.5)`
- HEX: 如`#ff0000`
- 颜色关键字：如`red`、`blue`、`yellow`等

::: code-group

```vue [RGB]
<div v-highlight="'rgb(0, 255, 0)'">绿色背景高亮</div>
```

```vue [RGBA]
<div v-highlight="'rgba(0, 0, 255, 0.5)'">半透明蓝色背景高亮</div>
```

```vue [HEX]
<div v-highlight="'#ff0000'">红色背景高亮</div>
```

```vue [Color Keyword]
<div v-highlight="'yellow'">黄色背景高亮</div>
```

:::

2. 对象配置方式

```vue
<template>
  <!-- 字符串类型参数 -->
  <div v-highlight="'#ff0000'" class="highlight-item">简单红色背景</div>

  <!-- 对象类型参数 —— 传入指定文本颜色 -->
  <div
    v-highlight="{ bgColor: '#ffff00', textColor: '#000000' }"
    class="highlight-item"
  >
    黄色背景黑色文字
  </div>

  <!-- 对象类型参数 —— 自动匹配高亮背景下文字颜色 -->
  <div
    v-highlight="{ bgColor: 'rgba(0, 0, 255, 0.5)', auto: true }"
    class="highlight-item"
  >
    半透明蓝色背景自动文字颜色
  </div>
</template>
```

<HightlightDemo/>

## 参数说明

<script setup>
import HightlightDemo from '../.vitepress/components/vHighlight/HighlightDemo.vue';
import ApiTable from '../.vitepress/components/ApiTable.vue';

const directiveData = [{
  name: 'value',
  description: '高亮配置，一个有效的颜色指：rgb、rgba、hex、color关键字',
  type: 'string',
  required: true
}];

const optionsData = [{
  name: 'bgColor',
  description: '高亮的背景颜色',
  type: 'string',
  required: true
}, {
  name: 'textColor',
  description: '高亮时的文字颜色',
  type: 'string',
  required: false
}, {
  name: 'auto',
  description: '是否自动计算文字颜色，若开启则textColor将被忽略',
  type: 'boolean',
  required: false,
  default: 'false'
}];
</script>

### 字符串类型

<ApiTable :data="directiveData" />

### 配置对象类型

<ApiTable :data="optionsData" />
