/// <reference types="vitest" />

import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/install.ts"),
      name: "VueTimeago3",
      fileName: (format) => `vue-timeago.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        assetFileNames: "vue-timeago.[ext]",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  test: {
    environment: "jsdom",
    coverage: {
      provider: 'v8',
      reporter: ['text'],
    },
  },
  plugins: [
    dts({
      entryRoot: "./src/",
      rollupTypes: true
    }),
  ],
});
