export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxtjs/i18n',
  ],
  tailwindcss: {
    editorSupport: { autocompleteUtil: { as: 'tailwindClasses' } },
  },
  image: {
    format: ['avif', 'webp'],
  },
  fonts: {
    families: [
      {
        name: 'Alte Haas Grotesk',
        provider: 'local',
        styles: ['normal'],
        weights: ['400', '700'],
        subsets: ['latin', 'latin-ext'],
      },
      {
        name: 'M PLUS Rounded 1c',
        provider: 'google',
        subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext', 'japanese'],
      },
    ],
  },
  site: {
    url: 'https://fractalcounty.com',
    name: 'FRACTALCOUNTY',
    indexable: true,
  },
  seo: {
    redirectToCanonicalSiteUrl: true,
    debug: true,
  },
  i18n: {
    baseUrl: 'https://fractalcounty.com',
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'fr', iso: 'fr-FR', file: 'fr.json' },
      { code: 'es', iso: 'es-ES', file: 'es.json' },
      { code: 'pt', iso: 'pt-PT', file: 'pt.json' },
      { code: 'de', iso: 'de-DE', file: 'de.json' },
      { code: 'nl', iso: 'nl-NL', file: 'nl.json' },
      { code: 'da', iso: 'da-DK', file: 'da.json' },
      { code: 'it', iso: 'it-IT', file: 'it.json' },
      { code: 'ru', iso: 'ru-RU', file: 'ru.json' },
      { code: 'ja', iso: 'ja-JP', file: 'ja.json' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'fractalcounty_i18n_rdr',
      redirectOn: 'root',
    },
  },
  ogImage: {
    fonts: [
      {
        name: 'Alte Haas Grotesk',
        weight: '400',
        path: '/AlteHaasGrotesk-Regular.woff',
      },
      {
        name: 'Alte Haas Grotesk',
        weight: '700',
        path: '/AlteHaasGrotesk-Bold.woff',
      },
      {
        name: 'M PLUS Rounded 1c',
        weight: '700',
      },
    ],
  },
});
