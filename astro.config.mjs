// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    site: "https://linesofcodes.dailitation.xyz",

    i18n: {
        locales: ["en", "th"],
        defaultLocale: "en",
    },

    integrations: [mdx()],

    vite: {
        // @ts-ignore
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                "@": fileURLToPath(new URL("./src", import.meta.url)),
            },
        },
    },
});
