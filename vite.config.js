import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'    // если React

export default defineConfig({
    plugins: [react()],

    build: {
        sourcemap: true,         // потом можно отключить
        minify: 'esbuild',       // или 'terser'
        target: 'es2015',
    },
})