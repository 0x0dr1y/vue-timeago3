import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
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
  plugins: [
    dts({
      entryRoot: "./src/",
      rollupTypes: true
    }),
  ],
});
