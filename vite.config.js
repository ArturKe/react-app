import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { resolve } from 'path'
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
  },
  // resolve: {
  //   alias: {
  //     '.': resolve(__dirname, '@/src'),
  //   },
  // }

  // build: {
  //   rollupOptions: {
  //     input: {
  //       // main: resolve(__dirname, 'index.html'),
  //       ListComponent: resolve(__dirname, './src/components/lists/list/ListComponent'),
  //     },
  //     // input: {
  //     //   '.': resolve(__dirname, '@/src'),
  //     // },
  //   },
  // },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      components: fileURLToPath(new URL("./src/components", import.meta.url)),
    },
  },
})
