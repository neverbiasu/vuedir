# v-mousefollow

让元素跟随鼠标移动的指令。

## 基础用法

使用 v-mousefollow 指令可以让元素跟随鼠标移动。

<MouseFollowDemo />

::: details 查看代码
<<< @/.vitepress/components/vMouseFollow/MouseFollowDemo.vue
:::

## 进阶用法

结合其他样式和动画效果，创建更丰富的鼠标跟随效果。

<MouseFollowAdvancedDemo />

::: details 查看代码
<<< @/.vitepress/components/vMouseFollow/MouseFollowAdvancedDemo.vue
:::

## API

<ApiTable :data="apiData" />

## 注意事项

::: warning 注意
- 使用该指令的元素会被设置为 fixed 定位
- 元素的 pointer-events 会被设置为 none，以避免干扰其他元素的交互
- 指令会自动清理事件监听器
- 建议将跟随元素的尺寸控制在合理范围内
:::

<script setup>
import MouseFollowDemo from '../.vitepress/components/vMouseFollow/MouseFollowDemo.vue'
import MouseFollowAdvancedDemo from '../.vitepress/components/vMouseFollow/MouseFollowAdvancedDemo.vue'
import ApiTable from '../.vitepress/components/ApiTable.vue'

const apiData = [
  {
    name: 'v-mousefollow',
    description: '使元素跟随鼠标移动',
    type: 'boolean',
    default: '-',
    required: false
  }
]
</script> 