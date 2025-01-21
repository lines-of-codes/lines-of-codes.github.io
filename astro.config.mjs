// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: "https://lines-of-codes.github.io",
    i18n: {
        locales: ["en", "th"],
        defaultLocale: "en"
    },
    integrations: [tailwind()]
});