// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://lmcasella.github.io",
    base: "/portfolio",
    vite: {
        plugins: [tailwindcss()],
    },
    devToolbar: {
        enabled: false,
    },
    i18n: {
        defaultLocale: "es",
        locales: ["es", "en"],
        routing: {
            prefixDefaultLocale: false, // 'es' estará en /, 'en' en /en/
        },
    },
});
