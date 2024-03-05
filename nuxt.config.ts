// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  typescript: {
    shim: false,
  },
  modules: [
    "@pinia/nuxt",
    "@nuxt/test-utils/module",
    "@nuxtjs/supabase",
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui",
    "nuxt-icon-tw",
    "@nuxtjs/color-mode",
  ],
  headlessui: {
    prefix: "Headless",
  },
  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light'
},
  supabase: {
    redirect: true,
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      exclude: ["/", "/zedFit"],
      cookieRedirect: true,
    },
  },
});
