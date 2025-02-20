# v-countup 数字滚动

## 介绍

v-countup 指令用于创建数字滚动动画效果，支持指定目标数值或使用元素内容作为目标值，支持小数位滚动。

## 使用方法

```vue
<!-- 基本使用 -->
<span v-countup>100</span>

<!-- 指定目标值 -->
<span v-countup="1000"></span>

<!-- 使用响应式数据 -->
<span v-countup="count"></span>

<!-- 链式传参 -->
<span v-countup.duration-3.decimals-2.startVal-100>1500.50</span>
```

## 示例

::: tip
以下示例展示了 v-countup 指令的不同使用场景和修饰符的使用方法
:::

### 基础用法

当不指定 value 时，会使用元素的文本内容作为目标值。

<div class="demo-container">
  <Basic />
</div>

::: details 查看代码
<<< @/.vitepress/components/vCountup/Basic.vue
:::

::: warning 注意

请确保元素的文本内容为有效的数字。

:::

### 响应式用法

<div class="demo-container">
  <Reactive />
</div>

::: details 查看代码
<<< @/.vitepress/components/vCountup/Reactive.vue
:::

### 链式传参

<div class="demo-container">
  <Modifiers />
</div>

::: details 查看代码
<<< @/.vitepress/components/vCountup/Modifiers.vue
:::

## API

### 指令值

<ApiTable :data="directiveProps" />

### 修饰符

<ApiTable :data="modifierProps" />

<script setup>
import Basic from '../.vitepress/components/vCountup/Basic.vue'
import Reactive from '../.vitepress/components/vCountup/Reactive.vue'
import Modifiers from '../.vitepress/components/vCountup/Modifiers.vue'
import ApiTable from '../.vitepress/components/ApiTable.vue'

const directiveProps = [
  {
    name: 'value',
    type: 'number | { value: number }',
    required: false,
    description: '目标数值',
    default: '元素内容'
  }
];

const modifierProps = [
  {
    name: 'duration',
    type: 'number',
    required: false,
    description: '动画持续时间（秒）',
    default: '2'
  },
  {
    name: 'decimals',
    type: 'number',
    required: false,
    description: '小数位数，用于控制小数点后的位数',
    default: '0'
  },
  {
    name: 'startVal',
    type: 'number',
    required: false,
    description: '起始值',
    default: '0'
  }
];
</script>

## 注意事项

::: warning 注意

- 当不指定 value 时，会使用元素的文本内容作为目标值，请确保内容为有效的数字。
- 支持响应式数据绑定，当绑定值发生变化时会自动更新动画。
- 动画使用 requestAnimationFrame 实现，保证了较好的性能和流畅度。
- 如果目标值不是有效的数字，指令将不会执行动画并在控制台输出警告。

:::

<style scoped>
.demo-container {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
