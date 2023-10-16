// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  modules: ["@nuxtjs/tailwindcss", "@vue-macros/nuxt"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: "first",
    viewer: false,
  },
  components: [
    {
      path: "~/components/ui",
      // this is required else Nuxt will autoImport `.ts` file
      extensions: [".vue"],
      // prefix for your components, eg: UiButton
      prefix: "Ui",
    },
    "~/components",
  ],
});
