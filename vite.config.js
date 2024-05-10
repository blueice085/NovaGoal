import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  //base: "/NovaGoal/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        jp: resolve(__dirname, "jp.html"),
        //nested: resolve(__dirname, "jp/index.html"),
      },
    },
  },
});
