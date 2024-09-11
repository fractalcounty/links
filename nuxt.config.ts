// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    editorSupport: { autocompleteUtil: { as: 'tailwindClasses' } },
    config: {
      plugins: [require('daisyui')],
      daisyui: {
        themes: ['black'],
      },
    },
  },
});
