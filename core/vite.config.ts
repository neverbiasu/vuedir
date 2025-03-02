import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import vue from "@vitejs/plugin-vue";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  build: {
    minify: "terser",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", /lodash.*/],
      output: {
        inlineDynamicImports: true,
        generatedCode: "es2015",
        interop: "auto",
      },
      treeshake: {
        preset: "recommended",
        moduleSideEffects: false,
      },
    },
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          comments: true,
        },
      },
    }),
    dts({
      rollupTypes: true,
      insertTypesEntry: true,
    }),
  ],
});
