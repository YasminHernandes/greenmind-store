import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'assets': path.resolve(__dirname, './src/assets'),
      'components': path.resolve(__dirname, './src/components'),
      'contexts': path.resolve(__dirname, './src/contexts'),
      'layouts': path.resolve(__dirname, './src/layouts'),
      'routes': path.resolve(__dirname, './src/routes'),
      'styles': path.resolve(__dirname, './src/styles'),
      'types': path.resolve(__dirname, './src/types'),
    }
  },
  plugins: [react()],
})
