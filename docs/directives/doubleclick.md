# v-doubleClick

双击指令，用于监听元素的双击事件，当用户双击元素时触发传入的回调函数。

## 使用方法

<DoubleDemo />

::: details 查看代码
<<< @/.vitepress/components/vDoubleClick/DoubleDemo.vue
:::

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
