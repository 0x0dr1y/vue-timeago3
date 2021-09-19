import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "VueTypeahead",
      fileName: (format) => `vue-typeahead.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        assetFileNames: "vue-typeahead.[ext]",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [vue()],
});
