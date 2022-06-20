import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import laravel from 'vite-plugin-laravel';
import inertiaPageLayout from './resources/js/vite/inertiaPageLayout';

export default defineConfig({
  plugins: [inertiaPageLayout(), vue(), laravel()],
});
