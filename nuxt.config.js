import colors from 'vuetify/es5/util/colors'

require('dotenv').config();
const { FB_API_KEY, FB_AUTH_DOMAIN, FB_DATABASE_URL, FB_PROJECT_ID, FB_STORAGE_BUCKET, FB_MESSAGE_SENDER_ID, FB_APPID } = process.env;


export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    // titleTemplate: '%s - ' + process.env.npm_package_name,
    // title: process.env.npm_package_name || '',
    title: "title",
    meta: [
      { charset: 'utf-8' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', sizes:'32x32',type: 'image/png', href: '/picasso-logo.png' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'sanitize.css',
    '@/assets/css/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~/plugins/localStorage.js', ssr: false },
    { src: "~plugins/lazyload.js" },
    '~/plugins/filter.js',
  ],
  buildModules: ['@nuxtjs/dotenv'],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://localhost:3000',
    exclude: ['/add', '/edit'],
  },
  robots: {
    UserAgent: '*',
    Disallow: '*',
    Sitemap: 'https://localhost:3000/sitemap.xml',
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    },
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  env: {
    FB_API_KEY, FB_AUTH_DOMAIN, FB_DATABASE_URL, FB_PROJECT_ID, FB_STORAGE_BUCKET, FB_MESSAGE_SENDER_ID, FB_APPID
  },
}

