import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/projeto-tipsKeeper/', // mesmo nome do repositório
  plugins: [react()]
})