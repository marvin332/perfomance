import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'    // если React
import purgeCss from 'vite-plugin-purgecss'
export default defineConfig({
    plugins: [react(), purgeCss({
        content: ['./index.html', './src/**/*.jsx', './src/**/*.scss'],
        safelist: ['footer', 'active'], // классы, которые не трогать
    }),],
    base: '/perfomance/',
    build: {
        sourcemap: true,         // потом можно отключить
        minify: 'esbuild',       // или 'terser'
        target: 'es2015',
    },
})