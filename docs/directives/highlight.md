# v-highlight 指令

## 基础用法

```vue
<template>
  <div v-highlight="'#ff0000'">红色背景高亮</div>
</template>
```

<HightlightDemo/>

## 扩展用法

### 字符串颜色值

```vue
<template>
  <div v-highlight="'rgb(0, 255, 0)'">绿色背景高亮</div>
  <div v-highlight="'rgba(0, 0, 255, 0.5)'">半透明蓝色背景高亮</div>
  <div v-highlight="'yellow'">黄色背景高亮</div>
</template>
```

### 对象配置方式

```vue
<template>
  <!-- 自定义文字颜色 -->
  <div v-highlight="{ bgColor: '#ff0000', textColor: '#ffffff' }">
    红色背景白色文字
  </div>

  <!-- 自动计算文字颜色 -->
  <div v-highlight="{ bgColor: '#ffff00', auto: true }">
    黄色背景自动文字颜色
  </div>
</template>
```

## API

<script setup>
import HightlightDemo from '../.vitepress/components/vHighlight/HighlightDemo.vue';
import ApiTable from '../.vitepress/components/ApiTable.vue';

const directiveData = [{
  name: 'value',
  description: '高亮配置，可以是颜色字符串或配置对象',
  type: 'string | HighlightOptions',
  required: true
}];

const optionsData = [{
  name: 'bgColor',
  description: '背景颜色',
  type: 'string',
  required: true
}, {
  name: 'textColor',
  description: '文字颜色',
  type: 'string',
  required: false
}, {
  name: 'auto',
  description: '是否自动计算文字颜色',
  type: 'boolean',
  required: false,
  default: 'false'
}];
</script>

### 指令参数

<ApiTable :data="directiveData" />

### 配置对象类型

<ApiTable :data="optionsData" />

### 支持的颜色格式

- RGB 格式（如：`rgb(255, 0, 0)`）
- RGBA 格式（如：`rgba(255, 0, 0, 0.5)`）
- 十六进制格式（如：`#ff0000`）
- 颜色关键字（如：`red`、`blue`、`yellow`等）

## 功能说明

- 支持多种颜色格式
- 支持自定义文字颜色
- 支持自动计算最佳对比度的文字颜色
- 支持背景色透明度设置
- 颜色变化时有平滑过渡动画

### 注意事项

- `bgColor` 必须是有效的颜色值
- 当 `auto` 为 `true` 时，`textColor` 配置将被忽略
- 指令值为空时将移除高亮效果
