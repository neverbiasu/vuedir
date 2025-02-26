# v-autoresize 指令

## 介绍

`v-autoresize` 指令用于根据容器的宽度与高度动态调整文本的字体大小，确保内容始终适应容器

## 基础用法

<AutoresizeDefaultDemo/>
::: details 查看代码

<<< @/.vitepress/components/vAutoresize/AutoresizeDefaultDemo.vue

:::

## 扩展用法

可以设置多个参数，来达到自定义效果:

#### 参数说明

- `minFontSize`：字体大小的最小值，默认为 8。
- `maxFontSize`：字体大小的最大值，默认为 20。
- `ratio`：缩放比例，默认为 1。

<AutoresizeUltraDemo/>
::: details 查看代码

<<< @/.vitepress/components/vAutoresize/AutoresizeUltraDemo.vue

:::

## API

<ApiTable :data="props" />

## 注意事项
::: warning 注意
若是对字体大小不满意可以通过调整缩放比例来达到效果，缩放比例默认为 1，若缩放比例设置为 0.5，则字体大小会变为原来的一半。
:::
<script setup>
import AutoresizeDefaultDemo from '../.vitepress/components/vAutoresize/AutoresizeDefaultDemo.vue'
import AutoresizeUltraDemo from '../.vitepress/components/vAutoresize/AutoresizeUltraDemo.vue'
import ApiTable from '../.vitepress/components/ApiTable.vue';
const props = [
  {
    name: 'minFontSize',
    type: 'number',
    required: false,
    description: '字体大小的最小值',
    default: '8',
  },{
    name: 'maxFontSize',
    type: 'number',
    required: false,
    description: '字体大小的最大值',
    default: '20',
  },{
    name: 'ratio',
    type: 'number',
    required: false,
    description: '缩放比例',
    default: '1',
  },
];
</script>
