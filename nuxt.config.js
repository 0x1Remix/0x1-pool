
export default {
  mode: 'spa',
  head: {
    title: "0x1 Staking Pool",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "0x1 Staking Pool" },
      { hid: 'keywords', name: 'keywords', content: 'Dapp, DeFi, Staking, Token, BIN, BNB, BSC' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
      { rel: 'apple-touch-icon', href: '/logo.png' },
      { rel: 'shortcut icon', href: '/logo.png' }
    ]
  },

  router: {
    routeNameSplitter: '/'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue/dist/bootstrap-vue.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/bootstrap_vue',
    '@/plugins/i18n_vue',
    '@/plugins/web3_utils'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
