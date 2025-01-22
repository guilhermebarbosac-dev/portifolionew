const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')
const path = require('path')

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})
