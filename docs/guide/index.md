# 快速开始

## 介绍

CP-VueDir 是一个轻量级的 Vue 3 指令集合，旨在提供一系列实用的自定义指令，帮助开发者更高效地构建 Vue 应用。

## 安装

使用 pnpm 安装（推荐）：

```bash
pnpm add @cp-vuedir/core
```

## 使用

在你的 Vue 应用中注册 VueDir：

```ts
import { createApp } from "vue";
import VueDir from "@cp-vuedir/core";

const app = createApp(App);
app.use(VueDir);
app.mount("#app");
```

## 使用示例

### v-focus

自动聚焦指令，用于自动聚焦输入框。[查看详情](/directives/focus)

```vue
<template>
  <input v-focus type="text" placeholder="这个输入框将自动获得焦点" />
</template>
```
