// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   css:{
//     modules:{
//       localsConvention:"camelCase",
//     }
//   },
// })



import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/harshad-portfolio",
  server: {
    host: true, // Ensures accessibility from other devices
    port: 5173, // Use the same port or change it if needed
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    }
  },
})

