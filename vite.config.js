import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'    // если React
import compression from 'vite-plugin-compression'
import { imagetools } from 'vite-imagetools'
export default defineConfig({
    plugins: [react(), compression({ algorithm: 'brotliCompress' }),imagetools()],
    base: '/perfomance/',
    build: {
        sourcemap: false,
        minify: 'terser',
        terserOptions: {

            compress: { drop_console: true, drop_debugger: true },
            format: { comments: false },
        },
        target: 'es2017',
    },
})