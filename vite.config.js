import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import inject from '@rollup/plugin-inject';
import htmlPurge from 'vite-plugin-purgecss';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),  inject({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    htmlPurge(),],
    css: {
      devSourcemap: true,
    },
})
