# 指令集预览

<script setup>
import { ref, computed } from 'vue';

const directives = ref([
  {
    name: 'v-copy',
    description: '一键复制文本内容，支持动态文本和复制状态反馈',
    link: '/vuedir/directives/copy',
    category: '交互类'
  },
  {
    name: 'v-focus',
    description: '自动聚焦表单元素，提升表单交互体验',
    link: '/vuedir/directives/focus',
    category: '表单类'
  },
  {
    name: "v-pwdvisible",
    description: "密码可见性切换功能",
    link: "/vuedir/directives/pwdvisible",
    category: '表单类'
  },
  {
    name: 'v-highlight',
    description: '灵活的文本高亮效果，支持多种颜色格式和自动对比度',
    link: '/vuedir/directives/highlight',
    category: '视觉类'
  },
  {
    name: 'v-longpress',
    description: '长按事件功能，支持自定义长按时间',
    link: '/vuedir/directives/longpress',
    category: '交互类'
  },
  {
    name: 'v-spare',
    description: '处理图片加载失败场景，自动切换到备用图片',
    link: '/vuedir/directives/spare',
    category: '视觉类'
  },
  {
    name: 'v-doubleclick',
    description: '双击事件处理，提供更丰富的交互方式',
    link: '/vuedir/directives/doubleclick',
    category: '交互类'
  },
  {
    name: 'v-countup',
    description: '数字滚动动画效果，支持指定目标数值或使用元素内容作为目标值',
    link: '/vuedir/directives/countup',
    category: '视觉类'
  },
  {
    name: 'v-lazyload',
    description: '图片懒加载功能，支持自定义加载时机',
    link: '/vuedir/directives/lazyload',
    category: '视觉类'
  }
]);

const categories = {
  '交互类': 'var(--vp-c-brand)',
  '视觉类': 'var(--vp-c-green)',
  '表单类': 'var(--vp-c-yellow)'
};

const groupedDirectives = computed(() => {
  const groups = {};
  directives.value.forEach(directive => {
    if (!groups[directive.category]) {
      groups[directive.category] = [];
    }
    groups[directive.category].push(directive);
  });
  return groups;
});
</script>

<style>
.category-section {
  margin-bottom: 3rem;
}

.category-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
}

.directive-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 1rem 0;
}

@media (max-width: 1200px) {
  .directive-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .directive-grid {
    grid-template-columns: 1fr;
  }
}

.directive-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.directive-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand);
}

.directive-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-brand);
  margin-bottom: 0.75rem;
}

.directive-description {
  color: var(--vp-c-text-2);
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  flex-grow: 1;
}
</style>

<template v-for="(directives, category) in groupedDirectives" :key="category">
  <div class="category-section">
    <h2 class="category-title" :style="{ color: categories[category] }">
      {{ category }}
    </h2>
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
  </div>
</template>
