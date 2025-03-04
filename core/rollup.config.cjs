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
      sourcemap: false,
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
  watch: {
    exclude: "dist/**",
  },
};

const dtsConfig = !isWatch && {
  input: "dist/index.d.ts",
  output: [{ file: "dist/index.d.ts", format: "es" }],
  plugins: [dts()],
};

module.exports = [mainConfig, dtsConfig].filter(Boolean);
