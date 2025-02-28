# v-scrollto

## 简介

`v-scrollto` 指令用于滚动到指定元素，可配置滚动行为，滚动距离，滚动时间等。

## 基础用法

- `to`: 滚动到的元素，是一个`ref`对象。

<Basic />

::: details 查看代码
<<< @/.vitepress/components/vScrollto/Basic.vue
:::

## 滚动时长

- `duration`: 滚动时长，单位为 ms。
  <WithDuration />
  ::: details 查看代码
  <<< @/.vitepress/components/vScrollto/WithDuration.vue
  :::

## API

<ApiTable :data="apiTableData" />

## 注意事项

::: warning 注意

- `v-scrollto` 滚动的目标元素必须是一个`ref`对象。

:::

<script setup>
import { ref } from 'vue'
import Basic from "../.vitepress/components/vScrollto/Basic.vue"
import WithDuration from "../.vitepress/components/vScrollto/WithDuration.vue"
import ApiTable from "../.vitepress/components/ApiTable.vue"

const apiTableData = [
  {
    name: 'to',
    type: 'ref',
    default: 'null',
    description: '滚动到的元素，是一个`ref`对象。',
    required: true
  },
  {
    name: 'duration',
    type: 'number',
    default: '500',
    description: '滚动时长，单位为 ms。',
    required: false
  }
]
</script>
