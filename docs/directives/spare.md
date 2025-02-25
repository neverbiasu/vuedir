# v-spare 指令

## 介绍

v-spare 指令用于处理图片加载失败的场景。当图片加载失败时，会自动切换到指定的备用图片，提升用户体验。

## 基础用法

当不提供备用图片时，会使用默认的 SVG 图标：

<SpareDefaultDemo/>

::: details 查看代码
<<< @/.vitepress/components/vSpare/SpareDefaultDemo.vue
:::

## 使用网络图片作为备用图

当原始图片加载失败时，会自动切换到指定的网络备用图片：

<SpareNetworkDemo/>

::: details 查看代码
<<< @/.vitepress/components/vSpare/SpareNetworkDemo.vue
:::

## 使用本地图片作为备用图

可以使用导入的本地图片作为备用图：

<SpareLocalDemo/>

::: details 查看代码
<<< @/.vitepress/components/vSpare/SpareLocalDemo.vue
:::

## API

<ApiTable :data="props"/>

## 注意事项

::: warning 注意

- 指令的值必须是一个有效的图片 URL（本地路径或网络 URL）
- 建议提供与原始图片尺寸相近的备用图片，以保持页面布局的一致性

:::

<script setup>
import SpareNetworkDemo from '../.vitepress/components/vSpare/SpareNetworkDemo.vue'
import SpareLocalDemo from '../.vitepress/components/vSpare/SpareLocalDemo.vue'
import SpareDefaultDemo from '../.vitepress/components/vSpare/SpareDefaultDemo.vue'
import ApiTable from '../.vitepress/components/ApiTable.vue';

const props = [
  {
    name: 'value',
    type: 'string',
    required: false,
    description: '备用图片的URL地址，如果不提供则使用默认的SVG图标',
    default: 'Svg',
  },
];
</script>
