# 贡献指南

感谢你考虑为 VueDir 做出贡献！在提交你的贡献之前，请花点时间阅读以下指南。

## 📝 代码规范

### 命名规范

- 文件名：使用 kebab-case（例如：`v-focus.ts`）
- 组件名：使用 PascalCase（例如：`VFocus`）
- 变量名：使用 camelCase（例如：`focusElement`）

### TypeScript

- 所有的新代码都应该使用 TypeScript 编写
- 确保添加适当的类型注解
- 避免使用 `any` 类型

### 提交规范

提交信息应该遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```bash
feat: add v-focus directive
fix: handle edge case in v-focus
docs: update v-focus documentation
style: format code
refactor: optimize v-focus performance
test: add v-focus unit tests
chore: update dependencies
```

## 🔍 提交 PR

1. 确保你的代码通过了所有测试
2. 更新相关的文档
3. 提交你的改动：

```bash
git add .
git commit -m "feat: add new feature"
git push origin feat/your-feature
```

4. 在你的 fork 仓库中向源仓库创建一个 Pull Request
5. 在 PR 描述中：

   - 描述你解决的问题
   - 描述你的解决方案
   - 提供相关的截图（如果适用）
   - 标注是否需要更新文档

6. 等待 PR 被审查和合并

## 📋 开发清单

- 在 `core/src/directives/` 目录下添加新的指令目录，它应该包括：

  - `core.ts`: 指令的核心逻辑
  - `index.ts`: 指令的入口文件，用于导出指令
  - `type.ts`: 指令的类型定义
  - 如果存在`svg`图标，需要在`core/src/icons`目录下添加

- 在 `core/src/index.ts` 中导出新的指令

- 在 `play/src/App.vue` 中测试新的指令

- 在 `docs/.vitepress/config.ts` 中添加新的指令到导航栏
- 在 `docs/directives/index.md` 中添加新的指令到`指令集预览`
- 在 `docs/directives/` 目录下添加新的指令文档, 文档格式如下：

  - 介绍
  - 基础用法
  - 其他用法 1
  - 其他用法 2
  - 其他用法...
  - API
  - 注意事项

- 在 `docs/.vitepress/components/` 目录下给新的指令添加一个或者多个示例组件

- 完善文档

## 🤝 行为准则

请确保你的行为符合我们的行为准则：

1. 尊重每一位贡献者
2. 接受建设性的批评
3. 关注问题本身
4. 保持专业和包容的交流氛围

## 📝 报告问题

报告问题时，请包含：

1. 问题的详细描述
2. 复现步骤
3. 预期行为
4. 实际行为
5. 相关的错误信息
6. 运行环境信息

## 🎉 致谢

<table>
  <tbody>
    <tr><td align="center" valign="top" width="12.5%" style="word-break: break-word; white-space: normal;"><a href="https://github.com/minorcell" title="minorcell"><img src="https://avatars.githubusercontent.com/u/120795714?v=4" width="100px;" alt="minorcell" style="border-radius: 9999px;" /></a></td><td align="center" valign="top" width="12.5%" style="word-break: break-word; white-space: normal;"><a href="https://github.com/KindSeven" title="KindSeven"><img src="https://avatars.githubusercontent.com/u/121385437?v=4" width="100px;" alt="KindSeven" style="border-radius: 9999px;" /></a></td>
    </tr>

  </tbody>
</table>

::: info 注意
数据更新来自 [Hub-io](https://hub-io-mcells-projects.vercel.app/)，可能存在延迟。
:::

再次感谢你的贡献！你的参与对于改进 VueDir 项目非常重要。
