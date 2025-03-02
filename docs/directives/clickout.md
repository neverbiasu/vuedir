# v-clickout

点击元素外部时触发回调函数的指令。

## 基础用法

点击元素外部区域时触发指定的回调函数。常用于弹窗、下拉菜单等需要点击外部关闭的场景。

<ClickoutDemo />

::: details 查看代码
<<< @/.vitepress/components/vClickout/ClickoutDemo.vue
:::

## 进阶用法

结合鼠标位置显示 tooltip。点击安全区域外的任何位置，都会在点击处显示提示信息。

<TooltipDemo />

::: details 查看代码
<<< @/.vitepress/components/vClickout/TooltipDemo.vue
:::

## API

<ApiTable :data="apiData" />

## 注意事项

::: warning 注意

- 确保回调函数是一个有效的函数
- 点击事件在捕获阶段处理，以确保优先级
- 指令会自动清理事件监听器
- 如果不需要限制其的点击作用范围，可以不用使用 ref 进行点击区域的判断
  :::

<script setup>
import ClickoutDemo from '../.vitepress/components/vClickout/ClickoutDemo.vue'
import TooltipDemo from '../.vitepress/components/vClickout/TooltipDemo.vue'
import ApiTable from '../.vitepress/components/ApiTable.vue'

const apiData = [
  {
    name: 'v-clickout',
    description: '点击元素外部时触发的回调函数',
    type: 'Function',
    default: '-',
    required: true
  }
]
</script>
