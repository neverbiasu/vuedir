# v-copy 指令

## 基础用法

```vue
<template>
  <div v-copy="text">{{ text }}</div>
</template>
```

### 自定义复制成功/失败样式

#### 成功示例

<CopyDemo />

#### 失败示例

<CopyDemoFail />

<script setup>
import { ref } from "vue";
import CopyDemo from '../.vitepress/components/vCopy/CopyDemo.vue';
import CopyDemoFail from '../.vitepress/components/vCopy/CopyDemoFail.vue';

const text = ref("点击复制这段文本");

</script>

## 功能说明

- 支持动态文本内容
- 复制成功时组件会动态显示绿色边框与阴影
- 复制失败时组件会动态显示红色边框与阴影
- 自动添加鼠标手型样式

### 注意事项

- 需要浏览器支持 Clipboard API
- 复制失败时会在控制台输出错误信息
