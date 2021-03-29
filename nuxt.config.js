require('dotenv').config()

export default {
  mode: 'universal',
  server: {
    port: process.env.NODE_PORT, // default: 3000
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'PHP South Africa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'PHP South Africa' },
      { hid: 'mobile-web-app-capable', name: 'mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' },
      { hid: 'author', name: 'author', content: 'PHP South Africa' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'PHP South Africa' },
      { hid: 'og:title', name: 'og:title', content: 'PHP South Africa' },
      { hid: 'og:description', name: 'og:description', content: 'PHP South Africa' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'PHP South Africa' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.jpg' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/global.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics'
  ],
  /*
  ** Google Analytics
  */
  googleAnalytics: {
    id: process.env.GA_ID
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/proxy'
  ],
  serverMiddleware: [
    {
      path: '/api',
      handler: '~/middleware/api/index.js'
    }
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true,
    baseUrl: process.env.PHPSA_BACKEND_URL || 'https://server.phpsouthafrica.org/api/'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   extend: function (config, {isDev, isClient}) {
      config.node = {
        fs: "empty"
      };
    }
  }
}
