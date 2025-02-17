# 开发指南

如果你想参与开发或在本地运行这个项目，只需要执行以下步骤：

1. 克隆项目并安装依赖：

```bash
git clone https://github.com/CodePaintStudio/vuedir
cd vuedir
```

2. 安装依赖：

::: code-group

```bash [pnpm]
pnpm install
```

```bash [npm]
npm install
```

```bash [yarn]
yarn install
```

:::

3. 启动开发环境：

::: code-group

```bash [pnpm]
pnpm dev
```

```bash [npm]
npm run dev
```

```bash [yarn]
yarn dev
```

:::

这个命令会同时启动以下服务：

- Core 库的构建监听（自动重新构建）
- Play 项目的开发服务器（用于测试和开发）
- 文档网站的开发服务器
