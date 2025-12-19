import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/remotive': {
        target: 'https://remotive.com/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/remotive/, ''),
      },
    },
  },
})
