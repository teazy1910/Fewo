// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  css: [
    '@/assets/css/main.css',
  ],
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image",
    ['@nuxtjs/google-fonts', {
        families: {
          Montserrat: true,
          Lora: true,
          'Josefin+Sans': true,
          Sacramento: true,
          Raleway: {
            wght: [100, 400],
            ital: [100]
          },
        }
    }],
  ],

})