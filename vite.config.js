import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'    // если React
import compression from 'vite-plugin-compression'

export default defineConfig({
    plugins: [react(), compression({ algorithm: 'brotliCompress' }),],
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