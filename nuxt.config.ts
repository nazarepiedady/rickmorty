// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/apollo',
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss'
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://rickandmortyapi.com/graphql'
      }
    }
  },
})
