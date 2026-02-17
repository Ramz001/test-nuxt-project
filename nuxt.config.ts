// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/fonts'],

  fonts: {
    families: [
      {
        name: 'Golos Text',
        provider: 'google',
        weights: [400, 500, 600, 700],
      },
    ],
    defaults: {
      weights: [400, 500, 600, 700],
    },
  },

  css: ['~/assets/scss/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/variables" as *;',
        },
      },
    },
  },

  runtimeConfig: {
    public: {
      apiBase: 'https://test-task-api.tapir.ws',
    },
  },
})
