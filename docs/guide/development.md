# 开发指南

如果你想参与开发或在本地运行这个项目，只需要执行以下步骤：

## 本地开发

1. 克隆项目并安装依赖：

```bash
git clone <repository-url>
cd vuedir
pnpm install
```

2. 启动开发环境：

```bash
pnpm dev
```

这个命令会同时启动以下服务：

- Core 库的构建监听（自动重新构建）
- Play 项目的开发服务器（用于测试和开发）
- 文档网站的开发服务器
