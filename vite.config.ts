import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(configEnv => {
  const isDevelopment = configEnv.mode === 'development'

  return {
    plugins: [react()],
    server: {
      port: 3000
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    css: {
      modules: {
        generateScopedName: isDevelopment ? '[name]__[local]__[hash:base64:5]' : '[hash:base64:5]'
      }
    }
  }
})
