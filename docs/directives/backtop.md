# v-backtop

返回顶部指令，当页面滚动到一定高度时显示返回顶部按钮。

## 基础用法

请继续向下滚动页面，当滚动超过 400px 时会在右下角显示返回顶部按钮。点击按钮可以平滑滚动回顶部。

<BacktopDemo />

::: details 点击查看代码
<<< @/.vitepress/components/vBacktop/BacktopDemo.vue
:::

## 配置项

| 参数             | 说明                       | 类型   | 默认值 |
| ---------------- | -------------------------- | ------ | ------ |
| visibilityHeight | 滚动高度达到此参数值才出现 | number | 400    |
| duration         | 回到顶部所需时间(ms)       | number | 500    |

## 类型定义

```ts
interface BacktopOptions {
  // 显示按钮的滚动阈值
  visibilityHeight?: number;
  // 滚动到顶部的时间(ms)
  duration?: number;
}
```

## 注意事项

::: warning 注意

- 使用该指令的元素会自动添加点击事件，点击后页面会平滑滚动到顶部
- 当滚动高度小于 visibilityHeight 时，元素会被隐藏
- 指令会自动处理事件的绑定和解绑，无需手动管理

:::

### 自定义样式

你可以自定义按钮的样式，比如：

- 修改按钮的大小和形状
- 更改背景色和悬停效果
- 调整位置和层级
- 添加自定义图标或文字

### 性能考虑

该指令已经对性能进行了优化：

- 使用 RAF 实现平滑滚动
- 合理的事件监听和解绑
- 最小化重排和重绘

<script setup>
import BacktopDemo from '../.vitepress/components/vBacktop/BacktopDemo.vue'
</script>
