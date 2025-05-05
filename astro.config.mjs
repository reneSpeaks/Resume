// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    build: {
        assetsPrefix: './'
    },
    site: 'https://renespeaks.github.io',
    base: '/Resume',
    trailingSlash: 'never',
    vite: {
        plugins: [tailwindcss()]
    }
});
