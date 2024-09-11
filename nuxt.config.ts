export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/image'],
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
      },
    ],
  },
});
