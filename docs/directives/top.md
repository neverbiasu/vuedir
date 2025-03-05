# v-top

## 简介

被`v-top` 绑定的元素会始终保持在最高层，即 zIndex 全局最高。

## 使用方法

给需要置顶的元素添加`v-top`指令即可。

<Basic />

::: details 查看代码
<<< @/.vitepress/components/vTop/Basic.vue
:::

## 注意事项

::: danger 警告！

- 全局应该只存在一个`v-top`指令，否则会导致置顶元素错乱。

:::

<script setup>
    import Basic from "../.vitepress/components/vTop/Basic.vue"
</script>
