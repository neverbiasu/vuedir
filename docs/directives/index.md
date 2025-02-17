# 指令集预览

<script setup>
import { ref } from 'vue';

const directives = ref([
  {
    name: 'v-copy',
    description: '一键复制文本内容，支持动态文本和复制状态反馈',
    link: '/vuedir/directives/copy'
  },
  {
    name: 'v-focus',
    description: '自动聚焦表单元素，提升表单交互体验',
    link: '/vuedir/directives/focus'
  },
  {
    name: 'v-highlight',
    description: '灵活的文本高亮效果，支持多种颜色格式和自动对比度',
    link: '/vuedir/directives/highlight'
  },
  {
    name: "v-longpress",
    description: "长按事件功能，支持自定义长按时间",
    link: "/vuedir/directives/longpress"
  }
]);
</script>

<style>
.directive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.directive-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
}

.directive-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand);
}

.directive-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--vp-c-brand);
  margin-bottom: 0.5rem;
}

.directive-description {
  color: var(--vp-c-text-2);
  line-height: 1.5;
}
</style>

<div class="directive-grid">
  <a
    v-for="directive in directives"
    :key="directive.name"
    :href="directive.link"
    class="directive-card"
  >
    <div class="directive-name">{{ directive.name }}</div>
    <div class="directive-description">{{ directive.description }}</div>
  </a>
</div>
