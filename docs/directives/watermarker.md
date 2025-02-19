# v-watermarker

## 介绍

`v-watermarker` 指令用于在元素上添加水印效果，以保护内容的版权或标识。

## 使用方法

```vue
<template>
  <div v-watermarker="{ text: '水印文本' }">
    <!-- 你的内容 -->
  </div>
</template>
```

## 示例

<WatermarkerDemo />

::: details 点击查看代码
<<< @/.vitepress/components/vWatermarker/WatermarkerDemo.vue
:::

## API

<ApiTable :data="data" />

## 注意事项

::: warning 使用限制

- 确保容器元素具有明确的宽高，否则水印可能无法正确显示
- 水印会自动适应容器大小
- 水印层的 pointer-events 设置为 none，不会影响容器内容的交互
  :::

::: tip 性能优化

- 使用 Canvas 绘制水印，性能优良
- 水印图案会被缓存，不会重复绘制
- 容器大小变化时会自动重新计算水印位置
  :::

<script setup>
import WatermarkerDemo from '../.vitepress/components/vWatermarker/WatermarkerDemo.vue'
import ApiTable from "../.vitepress/components/ApiTable.vue" 

const data = [
    {
        name: "text",
        type: "string",
        required: false,
        default: "水印文本",
        description: "水印文本内容"
    },
    {
        name: "direction",
        type: "string",
        required: false,
        default: "diagonal",
        description: "水印方向，可选值：'horizontal'（水平）/'vertical'（垂直）/ 'diagonal'（对角线）"
    },
    {
        name: "fontSize",
        type: "number",
        required: false,
        default: 16,
        description: "字体大小"
    },
    {
        name: "fontFamily",
        type: "string",
        required: false,
        default: "Arial",
        description: "字体族"
    },
    {
        name: "textColor",
        type: "string",
        required: false,
        default: "#000000",
        description: "文字颜色"
    },
    {
        name: "opacity",
        type: "number",
        required: false,
        default: 0.1,
        description: "透明度"
    },
    {
        name: "gap",
        type: "number",
        required: false,
        default: 100,
        description: "水印之间的间距"
    },
    {
        name: "zIndex",
        type: "number",
        required: false,
        default: 1000,
        description: "水印层级"
    }
]
</script>
