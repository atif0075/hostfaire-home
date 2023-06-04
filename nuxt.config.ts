// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css',],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        '@nuxtjs/device',
        '@hypernym/nuxt-gsap',
    ],
    gsap: {
        // Module options
        extraPlugins: {
            scrollTo: true,
            scrollTrigger: true,
            observer: true,
            text: true
        },
    },

})
