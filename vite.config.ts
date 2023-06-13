import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'components': path.resolve(__dirname, './src/components'),
      'assets': path.resolve(__dirname, './src/assets'),
      'pages': path.resolve(__dirname, './src/pages'),
      'layouts': path.resolve(__dirname, './src/layouts'),
      'styles': path.resolve(__dirname, './src/styles'),
      'routes': path.resolve(__dirname, './src/routes'),
    }
  },
  plugins: [react()],
})
