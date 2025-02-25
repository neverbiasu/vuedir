# v-ripple

## 简介

`v-ripple` 是一个用于给目标元素添加水波纹效果的指令，支持自定义波纹颜色和时长。

## 基础用法

通过给元素或者组件添加`v-ripple`的指令实现。

<BasicDemo />

::: details 查看代码

<<< @/.vitepress/components/vRipple/BasicDemo.vue

:::

## 设置波纹颜色

通过`color`属性设置波纹颜色。

<WithColor />

::: details 查看代码

<<< @/.vitepress/components/vRipple/WithColor.vue

:::

## 设置波纹时长

通过`duration`属性设置波纹时长。

<WithDuration />

::: details 查看代码

<<< @/.vitepress/components/vRipple/WithDuration.vue

:::

## API

<ApiTable :data="data" />

## 注意事项

::: warning 注意

- `duration`属性的单位为毫秒。

:::

<script setup>
import BasicDemo from "../.vitepress/components/vRipple/BasicDemo.vue";
import WithColor from "../.vitepress/components/vRipple/WithColor.vue";
import WithDuration from "../.vitepress/components/vRipple/WithDuration.vue";
import ApiTable from "../.vitepress/components/ApiTable.vue";

const data = [
    {
        name: "duration",
        type: "number",
        default: "500",
        description: "波纹时长，单位ms",
        required: false,
    },
    {
        name: "color",
        type: "string",
        default: "#fff",
        description: "波纹颜色",
        required: false,
    }
]
</script>
