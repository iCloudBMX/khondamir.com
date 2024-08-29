// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  app: {
    head: {
      title: "Khondamir Abdukhoshimov",
      meta: [
        {
          name: "description",
          content: "Khondamir Abdukhoshimov's blog",
        },
      ],
    },
  },

  modules: ["@nuxtjs/tailwindcss"],

  // components: [{ path: "~/components/layout/default", prefix: "Default" }],
});
