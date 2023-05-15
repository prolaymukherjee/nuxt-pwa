// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
        '@nuxtjs/tailwindcss',
        '@vite-pwa/nuxt'
    ],
    pwa: {
        manifest: {
            name: 'Nuxt APP',
            short_name: "Nuxt3 PWA",
            description: "Testing Nuxt3 PWA",
            start_url: '/',
            scope: '.',
            icons: [
                {
                  src: "icons/icon-72x72.png",
                  sizes: "64x64",
                  type: "image/png",
                },
                {
                  src: "icons/icon-144x144.png",
                  sizes: "144x144",
                  type: "image/png",
                },
                {
                  src: "icons/icon-192x192.png",
                  sizes: "192x192",
                  type: "image/png",
                },
                {
                  src: "icons/icon-512x512.png",
                  sizes: "512x512",
                  type: "image/png",
                },
              ],
        },
        workbox: {
            navigateFallback: "/"
        },
        devOptions: {
          enabled: true,
          type: 'module'
        }, 
    },
    app: {
        head: {
        title: 'Nuxt APP',
        }
    },
    
})
