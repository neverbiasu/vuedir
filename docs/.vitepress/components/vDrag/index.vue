<template>
  <div class="vdrag-examples-container">
    <div class="theme-notice">
      <p>这些示例会自动适应当前的主题颜色，尝试切换深色和浅色模式来查看效果。</p>
      <ThemeStatus />
    </div>

    <BasicDrag />
    <ListSort />
    <DragHandle />
    <TaskBoard />
  </div>
</template>

<script>
import ListSort from './ListSort.vue'
import DragHandle from './DragHandle.vue'
import TaskBoard from './TaskBoard.vue'
import BasicDrag from './BasicDrag.vue'
import ThemeStatus from '../ThemeStatus.vue'

export default {
  name: 'VDragExamples',
  components: {
    ListSort,
    DragHandle,
    TaskBoard,
    BasicDrag,
    ThemeStatus
  }
}
</script>

<style scoped>
.vdrag-examples-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 20px 0;
}

.theme-notice {
  background-color: var(--vp-c-brand-dimm);
  padding: 12px 16px;
  border-radius: 6px;
  border-left: 4px solid var(--vp-c-brand);
  margin-bottom: 10px;
}

.theme-notice p {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 14px;
}
</style>
