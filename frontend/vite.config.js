// import { defineConfig } from 'vite' hgdfhdf
// import react from '@vitejs/plugin-react'
// import pluginRewriteAll from 'vite-plugin-rewrite-all';
// https://vitejs.dev/config/
// export default defineConfig({sdfsdf
  // plugins: [react(),pluginRewriteAll()],
// })df
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // 👈 this is important
})
