# v-debounce

## 介绍

`v-debounce` 指令用于为按钮添加防抖功能。它可以有效防止用户快速重复点击按钮导致的性能问题，特别适用于表单提交、数据请求等场景。

## 使用方法

在按钮上使用 `v-debounce` 指令，并将事件处理函数作为指令的值传入：

```vue
<template>
  <button v-debounce="handleClick">点击提交</button>
</template>

<script setup>
const handleClick = () => {
  console.log("防抖后的点击事件");
};
</script>
```

## 示例

### 基础示例

以下示例展示了输入框和按钮的防抖效果：

<div class="demo-container">
  <BasicDemo />
</div>

::: details 查看代码
<<< @/.vitepress/components/vDebounce/BasicDemo.vue
:::

## API

<ApiTable :data="data" />

## 注意事项

::: warning 注意

- `v-debounce` 指令只能用于显式绑定执行函数元素。
- 防抖延迟时间固定为 300ms，不支持自定义。
- 指令可以不传参数直接使用，也可以传入一个回调函数作为参数。

:::

<script setup>
import BasicDemo from '../.vitepress/components/vDebounce/BasicDemo.vue'
import ApiTable from '../.vitepress/components/ApiTable.vue'

const data = [
    {
        name:"event",
        type:"Function",
        required:true,
        description:"防抖触发的回调函数",
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
