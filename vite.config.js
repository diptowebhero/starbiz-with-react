import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
// import reactRefresh from '@vitejs/plugin-react-refresh';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    // reactRefresh()
  ],
  // optimizeDeps: {
  //   include: ['jquery', 'owl.carousel'],
  // },
  css: {
    devSourcemap: true,
  },
});
