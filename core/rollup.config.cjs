const path = require("path");
const alias = require("@rollup/plugin-alias");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const dts = require("rollup-plugin-dts").default;

const isWatch = process.env.ROLLUP_WATCH === "true";

const mainConfig = {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "es",
      sourcemap: true,
    },
  ],
  external: ["vue"],
  plugins: [
    alias({
      entries: {
        "@": path.resolve(__dirname, "src"),
      },
    }),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: "dist",
    }),
  ],
  // 排除输出目录，避免 watch 监听到生成的文件
  watch: {
    exclude: "dist/**",
  },
};

// 如果不是 watch 模式，再进行 dts 的打包
const dtsConfig = !isWatch && {
  input: "dist/index.d.ts",
  output: [{ file: "dist/index.d.ts", format: "es" }],
  plugins: [dts()],
};

module.exports = [mainConfig, dtsConfig].filter(Boolean);
