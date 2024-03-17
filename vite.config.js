import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";

import i18n from "laravel-vue-i18n/vite";

export default defineConfig({
    build: {
        chunkSizeWarningLimit: 100000000,
    },
    plugins: [
        laravel({
            input: "resources/js/app.js",
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),

        i18n(),
    ],
});
