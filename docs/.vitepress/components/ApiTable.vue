<script setup lang="ts">
// Props definition remains unchanged
interface Props {
  data: {
    name: string
    description: string
    type: string
    required?: boolean
    default?: string
  }[]
}

defineProps<Props>()
</script>

<template>
  <div class="api-table">
    <table>
      <thead>
        <tr>
          <th>属性名</th>
          <th>说明</th>
          <th>类型</th>
          <th>是否必选</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.name">
          <td class="name-column">{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>
            <code>{{ item.type }}</code>
          </td>
          <td>
            <span :class="['required-badge', item.required ? 'required' : 'optional']">
              {{ item.required ? '是' : '否' }}
            </span>
          </td>
          <td class="default-column">
            <span>{{ item.default || '-' }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.api-table {
  width: 100%;
  border-radius: 8px;
  border: none;
}

.api-table table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 8px;
  overflow: hidden;
}

.api-table th,
.api-table td {
  text-align: left;
  padding: 0.75rem 1rem;
  border: none;
}

tr {
  border: none;
}

.api-table th {
  font-weight: 600;
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg-soft);
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
}

.api-table tbody tr:hover {
  background-color: var(--vp-c-bg-soft);
}

.api-table code {
  font-family: var(--vp-font-family-mono);
  font-size: 0.8125rem;
  background-color: var(--vp-c-bg-soft);
  padding: 0.2em 0.4em;
  border-radius: 4px;
  color: var(--vp-c-text-1);
}

.api-table .name-column {
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.required-badge {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
}

.required-badge.required {
  background-color: var(--vp-c-red-dimm-2);
  color: var(--vp-c-red-1);
}

.required-badge.optional {
  background-color: var(--vp-c-blue-dimm-2);
  color: var(--vp-c-blue-1);
}

.api-table .default-column {
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-2);
}

@media (max-width: 640px) {
  .api-table {
    font-size: 0.75rem;
  }

  .api-table th,
  .api-table td {
    padding: 0.5rem;
  }

  .api-table code {
    font-size: 0.6875rem;
  }

  .required-badge {
    font-size: 0.625rem;
    padding: 0.125rem 0.375rem;
  }
}
</style>
