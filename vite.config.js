import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'    // если React
import compression from 'vite-plugin-compression'
import { imagetools } from 'vite-imagetools'
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
    plugins: [react(), compression({ algorithm: 'brotliCompress' }),
        viteImagemin({
            gifsicle: { optimizationLevel: 3 },
            optipng:  { optimizationLevel: 5 },
            mozjpeg:  { quality: 80, progressive: true },
            svgo:     { plugins: ['preset-default'] },
            webp:     { quality: 80 },
            avif:     { quality: 50 },
        }),

        imagetools({
        defaultDirectives: (url) => {
            // автоматом создаём webp+avif, если ничего не указано в query
            if (url.searchParams.has('format')) return []
            return new URLSearchParams([['format','webp;avif'], ['meta','none']])
        },
    })],
    base: '/perfomance/',
    build: {
        sourcemap: false,
        assetsInlineLimit: 4096,
        minify: 'terser',
        terserOptions: {

            compress: { drop_console: true, drop_debugger: true },
            format: { comments: false },
        },
        target: 'es2017',
    },
})