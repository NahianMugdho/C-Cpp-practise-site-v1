import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' → যেকোনো GitHub repo নামেই (username.github.io/repo-name/) ঠিকমতো চলবে
export default defineConfig({
  base: './',
  plugins: [react()],
})
