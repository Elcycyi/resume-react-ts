import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // имя репозитория на GitHub — без него Pages не найдёт файлы
  base: '/resume-react-ts/',
})
