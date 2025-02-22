# v-ellipsis

## 简介

`v-ellipsis` 指令用于处理文本溢出时的省略显示效果，支持单行和多行文本的省略。当文本内容超出指定的行数时，将自动显示省略号。

## 使用方法

### 基础用法

默认情况下，`v-ellipsis` 指令会将文本限制在单行显示，超出部分用省略号表示。

<BasicDemo />

::: details 查看代码

<<< @/.vitepress/components/vEllipsis/BasicDemo.vue

:::

### 多行省略

通过传递 `lines` 参数，可以设置最大显示行数。

<WithLines />

::: details 查看代码

<<< @/.vitepress/components/vEllipsis/WithLines.vue

:::

## 配置选项

<ApiTable :data="data" />

## 注意事项

::: warning 注意

- 该指令会自动处理浏览器兼容性问题，对于不支持 `-webkit-line-clamp` 的浏览器，会使用 `max-height` 作为降级方案。

:::

<script setup>
import BasicDemo from "../.vitepress/components/vEllipsis/BasicDemo.vue";
import WithLines from "../.vitepress/components/vEllipsis/WithLines.vue";
import ApiTable from "../.vitepress/components/ApiTable.vue";

const data = [
  {
    name: "lines",
    type: "number",
    default: "1",
    description: "限制文本显示的最大行数，超出部分用省略号表示。",
  },]
</script>
