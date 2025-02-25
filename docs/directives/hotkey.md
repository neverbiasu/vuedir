# v-hotkey

## 简介

`v-hotkey` 指令用于监听键盘事件，并在事件发生时执行指定的回调函数，支持单个或多个按键的组合。

## 基本用法

将 `v-hotkey` 指令添加到需要监听键盘事件的元素上，并指定要监听的按键组合和回调函数：

<One />

::: details 点击查看代码

<<< @/.vitepress/components/vHotkey/One.vue

:::

## 多个按键组合

可以同时监听多个按键组合，当所有按键都被按下时，回调函数将被执行，按键间通过 `+` 符号连接：

<More />

::: details 点击查看代码

<<< @/.vitepress/components/vHotkey/More.vue

:::

## 自动避免可编辑元素冲突

当指令所在的元素是可编辑元素（如 `input`、`textarea` 等）时，会自动避免与可编辑元素的默认快捷键冲突，您可以放心使用。

<Autofix />

::: details 点击查看代码

<<< @/.vitepress/components/vHotkey/Autofix.vue

:::

## API

<ApiTable :data="data"/>

<script setup>
import One from "../.vitepress/components/vHotkey/One.vue"
import More from "../.vitepress/components/vHotkey/More.vue"
import Autofix from "../.vitepress/components/vHotkey/Autofix.vue"
import ApiTable from '../.vitepress/components/ApiTable.vue'

const data = [
  {
    name: 'event',
    type: 'Function',
    description: '触发事件时的回掉函数',
    default: '无',
    required: true,
  },
  {
    name: 'value',
    type: 'String',
    description: '监听的按键组合或单个按键，多个按键间通过 `+` 符号连接',
    default: '无',
    required: true,
  },
]
</script>
