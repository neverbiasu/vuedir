# v-throttle

## 介绍

`v-throttle` 指令用于给按钮添加节流功能。它可以限制用户在一定时间内重复点击按钮的次数，特别适用于频繁触发的事件处理场景，如搜索按钮、提交按钮等。

## 使用方法

在按钮上使用 `v-throttle` 指令，并将事件处理函数作为指令的值传入：

<div class="demo-container">
  <BasicDemo />
</div>

::: details 查看代码
<<< @/.vitepress/components/vThrottle/BasicDemo.vue
:::

## API

<ApiTable :data="data"/>

## 注意事项

::: warning 注意

- `v-throttle` 指令只能用于按钮元素。
- 节流延迟时间固定为 300ms，不支持自定义。
- 指令可以不传参数直接使用，也可以传入一个回调函数作为参数。

:::

<script setup>
import BasicDemo from '../.vitepress/components/vThrottle/BasicDemo.vue'
import ApiTable from '../.vitepress/components/ApiTable.vue'

const data = [
    {
        name:"event",
        type:"Function",
        required:true,
        description:"节流触发的回调函数",
        default:"-"
    }
]
</script>

<style>
.demo-container {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
