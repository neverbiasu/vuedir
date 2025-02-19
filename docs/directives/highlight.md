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

<HightlightDemo/>

::: details 查看代码
<<< @/.vitepress/components/vHighlight/HighlightDemo.vue
:::

### 链式调用

通过对象配置方式，可以组合使用多个参数，实现更灵活的高亮效果：

<Modifiers />

::: details 查看代码
<<< @/.vitepress/components/vHighlight/Modifiers.vue
:::

## API

### 字符串类型

<ApiTable :data="directiveData" />

### 配置对象类型

<ApiTable :data="optionsData" />

## 注意事项

::: warning 注意

- 如果同时传入`textColor`和`auto='true'`时，则`textColor`将被忽略。

:::

<script setup>
import HightlightDemo from '../.vitepress/components/vHighlight/HighlightDemo.vue';
import Modifiers from '../.vitepress/components/vHighlight/Modifiers.vue';
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
