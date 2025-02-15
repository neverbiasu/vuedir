# 📡 VueDir

English | [简体中文](./README.md)

VueDir is a lightweight collection of Vue 3 directives designed to provide a set of practical custom directives that help developers build Vue applications more efficiently.

## ✨ Features

- 🎯 **Focus Directive**: Provides v-focus directive for automatic focus functionality
- 🎨 **Lightweight**: Import on demand, no extra bundle size
- 🔧 **Easy to Use**: Simple API design for quick adoption
- 📦 **TypeScript**: Written in TypeScript with complete type support

## 📦 Installation

Install with pnpm (recommended):

```bash
pnpm add @vuedir/core
```

## 🚀 Usage

Register VueDir in your Vue application:

```ts
import { createApp } from "vue";
import VueDir from "@vuedir/core";

const app = createApp(App);
app.use(VueDir);
app.mount("#app");
```

## 📖 Documentation

Visit our [official documentation](https://vuedir.codepaintstudio.com) for more information.

## 🤝 Contributing

We welcome all forms of contributions! Please check our [Contributing Guide](./CONTRIBUTING.md) to learn how to get involved.

## 📄 License

VueDir is open-source software licensed under the MIT License. See the [MIT License](https://github.com/CodePaintStudio/vuedir/blob/main/LICENSE) file for more details.
