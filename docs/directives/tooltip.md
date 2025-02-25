# v-tooltip

## 介绍

`v-tooltip` 是一个 Vue 指令，用于为元素添加悬浮提示。它可以在鼠标悬停在元素上时显示一个提示框，提供更多的信息或解释。

## 基础用法

要使用 `v-tooltip` 指令，只需在元素上添加 `v-tooltip` 属性，并设置提示内容即可。

- `text`：提示内容。
- `position`：提示框的位置，可选值为 `top`、`bottom`、`left`、`right`，默认为 `top`。

<Basic />

::: details 代码示例

<<< @/.vitepress/components/vTooltip/Basic.vue

:::

## 自定义主题

使用 `theme` 属性可以自定义提示框的主题。

- `theme`：提示框的主题，可选值为 `light`、`dark`，默认为 `dark`。

<Theme/>

::: details 代码示例
<<< @/.vitepress/components/vTooltip/Basic.vue
:::

## 自定义延时

使用 `showDelay` 和 `hideDelay` 属性可以自定义提示框的显示和隐藏延时。

- `showDelay`：提示框的显示和隐藏延时，单位为毫秒，默认为 300。
- `hideDelay`：提示框的显示和隐藏延时，单位为毫秒，默认为 300。

<Delay/>

::: details 代码示例
<<< @/.vitepress/components/vTooltip/Basic.vue
:::

## 自定义偏移量

使用 `offset` 属性可以自定义提示框的偏移量。

- `offset`：提示框的偏移量，单位为像素，默认为 0。

<Offset/>
::: details 代码示例
<<< @/.vitepress/components/vTooltip/Basic.vue
:::

## API

<ApiTable :data="data" />

<script setup>
import Basic from "../.vitepress/components/vTooltip/Basic.vue"
import Theme from "../.vitepress/components/vTooltip/Theme.vue"
import Delay from "../.vitepress/components/vTooltip/Delay.vue"
import Offset from "../.vitepress/components/vTooltip/Offset.vue"
import ApiTable from "../.vitepress/components/ApiTable.vue"

const data = [
    {
        name: "text",
        type: "string",
        required: true,
        default: "-",
        description: "提示框的内容"
    },
    {
        name: "position",
        type: "string",
        required: false,
        default: "top",
        description: "提示框的位置，可选值为 'top'、'bottom'、'left'、'right'"
    },
    {
        name: "theme",
        type: "string",
        required: false,
        default: "dark",
        description: "提示框的主题，可选值为 'light'、'dark'"
    },
    {
        name: "showDelay",
        type: "number",
        required: false,
        default: 300,
        description: "提示框的显示延时，单位为毫秒"
    },
    {
        name: "hideDelay",
        type: "number",
        required: false,
        default: 300,
        description: "提示框的隐藏延时，单位为毫秒"
    },
    {
        name: "offset",
        type: "number",
        required: false,
        default: 0,
        description: "提示框的偏移量，单位为像素"
    }
]
</script>
