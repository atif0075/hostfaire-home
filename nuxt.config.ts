// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        '@nuxtjs/device',
    ],
    build: {
        transpile: ['@animxyz/core', '@animxyz/vue3', 'clsx'],
    },
})
