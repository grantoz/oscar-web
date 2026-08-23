import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 👈 This forces Vite to expose the server to the container's network interface
    port: 5173  // 👈 Ensure this matches your forwarded port
  }
})
