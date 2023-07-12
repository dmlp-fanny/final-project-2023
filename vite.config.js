import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/css/welcome.scss', 'resources/js/app.js', 'resources/js/main.jsx'],
            refresh: true,
        }),
        
        react()
    ],
});
