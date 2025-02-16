<script setup lang="ts">
// Props 定义保持不变
interface Props {
  data: {
    name: string;
    description: string;
    type: string;
    required?: boolean;
    default?: string;
  }[];
}

defineProps<Props>();
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
          <td>{{ item.required ? "是" : "否" }}</td>
          <td class="default-column">
            <span>{{ item.default || "-" }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.api-table {
  width: 100%;
  margin: 0;
  background: transparent;
}

.api-table table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 0.95rem;
  table-layout: fixed; /* 确保列宽均匀分布 */
}

.api-table th,
.api-table td {
  text-align: left;
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  border: none;
}

.api-table th {
  font-weight: 500;
  color: #1a1a1a;
  background-color: #f9fafb;
}

.api-table tr:last-child td {
  border-bottom: none;
}

.api-table code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.9em;
  background-color: #f3f4f6;
  padding: 0.2em 0.4em;
  border-radius: 4px;
  color: #374151;
}

.api-table .name-column {
  font-weight: 500;
  color: #1a1a1a;
  width: 15%; /* 属性名列宽 */
}

.api-table td:nth-child(2) {
  width: 40%; /* 说明列宽 */
}

.api-table td:nth-child(3) {
  width: 20%; /* 类型列宽 */
}

.api-table td:nth-child(4) {
  width: 10%; /* 是否必选列宽 */
}

.api-table td:nth-child(5) {
  width: 15%; /* 默认值列宽 */
}

.api-table .default-column {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.api-table tbody tr:hover {
  background-color: #f9fafb;
}
</style>
