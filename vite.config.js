import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel([
            'resources/css/app.css',
            'resources/js/app.js',
        ]),
         vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        react(),
        {
           name: 'blade',
           handleHotUpdate({ file, server }) {
               if (file.endsWith('.blade.php')) {
                   server.ws.send({
                       type: 'full-reload',
                       path: '*',
                   });
               }
           },
       }
    ],
});
