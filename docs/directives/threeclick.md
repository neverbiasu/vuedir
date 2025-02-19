# v-threeclick

## 介绍

`v-threeclick` 指令用于监听元素的三击事件，当用户在短时间内（500ms）连续点击三次时触发回调函数。

## 使用方法

```vue
<template>
  <div v-threeclick="handleThreeClick">点击我三次</div>
</template>

<script setup lang="ts">
const handleThreeClick = () => {
  console.log('触发三击事件');
};
</script>
```

## 示例

<ThreeClickDemo />

::: details 点击查看代码
<<< @/.vitepress/components/vThreeClick/ThreeClickDemo.vue
:::

## API

<ApiTable :data="data" />

## 注意事项

::: warning 使用限制
- 三击事件的判定时间间隔为500ms，超过此时间将重新开始计数
- 回调函数必须是一个有效的函数
:::

::: tip 使用建议
- 适用于需要三击触发的特殊交互场景
- 可以用于触发一些不常用但重要的功能
:::

<script setup>
import ThreeClickDemo from '../.vitepress/components/vThreeClick/ThreeClickDemo.vue'
import ApiTable from "../.vitepress/components/ApiTable.vue"

const data = [
  {
    name: "value",
    type: "Function",
    required: true,
    default: "-",
    description: "三击触发时的回调函数"
  }
]
</script>