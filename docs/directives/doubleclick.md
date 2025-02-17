# v-doubleClick

双击指令，用于监听元素的双击事件，当用户双击元素时触发传入的回调函数。

## 使用方法

```vue
<template>
  <div v-double-click="handleDoubleClick" class="double-click-box">
    双击计数：{{ count }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { vDoubleClick } from "@cp-vuedir/core";

const count = ref(0);

const handleDoubleClick = () => {
  count.value++;
};
</script>
```

<DoubleDemo />

## API

<ApiTable :data="data" />

<script setup>
import ApiTable from "../.vitepress/components/ApiTable.vue";
import DoubleDemo from "../.vitepress/components/vDoubleClick/DoubleDemo.vue";

const data = [
    {
        name: 'value',
        description: '双击事件成功后触发的回掉函数',
        type: 'Function ｜ () => void',
        default: '-',
        required: true
    }
]
</script>
