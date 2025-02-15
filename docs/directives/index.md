# Vue 3 指令集合

## 可用指令

### [v-focus](/directives/focus)

自动聚焦指令，用于自动聚焦输入框。

```vue
<template>
  <input v-focus type="text" placeholder="这个输入框将自动获得焦点" />
</template>
```

### [v-copy](/directives/copy)

点击复制指令，用于实现点击元素复制文本内容的功能。

```vue
<template>
  <div v-copy="text">{{ text }}</div>
</template>
```
