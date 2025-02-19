# v-pwdvisible 指令

## 介绍

`v-pwdvisible` 指令用于为密码输入框添加密码可见性切换功能。当应用于 `type="password"` 的输入框时，会在输入框右侧显示一个眼睛图标，用户可以通过点击图标在明文和密文之间切换显示状态。

## 使用方法

将 `v-pwdvisible` 指令添加到 `type="password"` 的输入框上：

```vue
<template>
  <input type="password" v-pwdvisible placeholder="请输入密码" />
</template>
```

## 示例

<PwdvisibleDemo />

::: details 查看代码
<<< @/.vitepress/components/vPwdvisible/PwdvisibleDemo.vue
:::

<script setup>
import PwdvisibleDemo from '../.vitepress/components/vPwdvisible/PwdvisibleDemo.vue';
import ApiTable from '../.vitepress/components/ApiTable.vue';
</script>

## 注意事项

::: warning 使用限制

- 该指令仅适用于 `type="password"` 的`input`元素
- 如果应用于其他类型的元素，将会在控制台显示警告信息

:::

::: tip 样式说明

- 眼睛图标会自动定位在输入框右侧
- 图标大小和位置已经过优化，确保在大多数场景下都能正常显示
- 图标颜色会继承当前文本颜色，可以通过 CSS 的 `color` 属性进行自定义

:::
