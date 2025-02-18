# v-longpress 指令

## 介绍

v-longpress 指令用于实现长按事件功能。当用户按住元素达到指定时间后，会触发相应的回调函数。

## 使用方法

### 基础用法

传入`event`参数，当用户长按元素达到指定时间（默认时间为 2 秒）后，会触发回调函数：

<LongPressDemo/>

::: details 查看代码
<<< @/.vitepress/components/vLongpress/LongPressDemo.vue
:::

### 自定义延时

`v-longpress`指令支持自定义延时时长，通过传入参数`delay`即可实现。`delay` 作为一个可选项，当你传入`delay`参数时，会覆盖默认的 2 秒长按时间：

设置 1 秒长按时间：

<LongPressWithDelay />

::: details 查看代码
<<< @/.vitepress/components/vLongpress/LongPressWithDelayDemo.vue
:::

## API

<ApiTable :data="props"/>

## 注意事项

::: warning 关于两个参数

- `event` 参数为必填项，必须是一个有效的函数
- `delay` 参数可选，必须是一个有效的数字（毫秒）

:::

<script setup>
import LongPressDemo from '../.vitepress/components/vLongpress/LongPressDemo.vue'
import LongPressWithDelay from "../.vitepress/components/vLongpress/LongPressWithDelayDemo.vue"
import ApiTable from '../.vitepress/components/ApiTable.vue';

const props = [
  {
    name: 'event',
    type: 'Function',
    required: true,
    description: '长按触发的回调函数',
  },
  {
    name: 'delay',
    type: 'number',
    required: false,
    description: '长按触发时间（毫秒）',
    default: '2000',
  },
];
</script>
