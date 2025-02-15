# 贡献指南

感谢你考虑为 VueDir 做出贡献！在提交你的贡献之前，请花点时间阅读以下指南。

## 🌟 开发流程

1. Fork 这个仓库
2. 克隆你 fork 的仓库到本地：

```bash
git clone <your-fork-url>
cd vuedir
```

3. 安装依赖：

```bash
pnpm install
```

4. 创建新的分支：

```bash
git checkout -b feat/your-feature
# 或
git checkout -b fix/your-bug-fix
```

5. 启动开发环境：

```bash
pnpm dev
```

这将同时启动：

- Core 库的构建监听（自动重新构建）
- Play 项目的开发服务器（用于测试和开发）
- 文档网站的开发服务器

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

4. 创建一个 Pull Request
5. 在 PR 描述中：
   - 描述你解决的问题
   - 描述你的解决方案
   - 提供相关的截图（如果适用）
   - 标注是否需要更新文档

## 📋 开发清单

- [ ] 代码符合项目规范
- [ ] 添加/更新测试用例
- [ ] 更新相关文档
- [ ] 本地测试通过
- [ ] 提交信息符合规范

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

再次感谢你的贡献！你的参与对于改进 VueDir 项目非常重要。
