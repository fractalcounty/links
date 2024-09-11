export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts'],
  tailwindcss: {
    editorSupport: { autocompleteUtil: { as: 'tailwindClasses' } },
  },
  fonts: {
    families: [
      {
        name: 'Alte Haas Grotesk',
        provider: 'local',
        weights: ['400', '700'],
      },
    ],
  },
});
