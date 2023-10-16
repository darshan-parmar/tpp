import { Frontegg } from "@frontegg/vue";
export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();
  nuxtApp.vueApp.use(Frontegg, {
    contextOptions: {
      baseUrl: "https://app-y1a1v291tzxa.frontegg.com",
      //clientId: "03c6adab-5580-465a-8a57-919e8e1b3f0d",
    },
    authOptions: {
      // keepSessionAlive: true // Uncomment this in order to maintain the session alive
    },
    //hostedLoginBox: false,
    router,
  });
});
