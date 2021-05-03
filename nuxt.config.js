
export default {
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
    title: 'Thomas Bichot',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '| Portfolio | Computer science student, gamer and big dreamer. I love tech and science!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/components',
    '@nuxtjs/color-mode',
    '@nuxt/postcss8',
    '@aceforth/nuxt-optimized-images'
  ],
  optimizedImages: {
    optimizeImages: false
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      'nuxt-i18n', {
        locales: [
          {
            code: 'en',
            iso: 'en-US'
          },
          {
            code: 'fr',
            iso: 'fr-FR'
          }
        ],
        baseUrl: 'https://thomasbichot.com',
        defaultLocale: 'fr',
        vueI18n: {
          fallbackLocale: 'fr',
          messages: {
            en: require('./lang/en-US.json'),
            fr: require('./lang/fr-FR.json')
          }
        },
        detectBrowserLanguage: {
          useCookie: true,
          cookieDomain: null,
          // Cookie name
          cookieKey: 'language_cookie',
          // Set to always redirect to value stored in the cookie, not just once
          alwaysRedirect: false,
          fallbackLocale: 'fr'
        },
        seo: true
      }
    ],
    '@nuxt/content',
    '@nuxtjs/device'
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    postcss: {
      preset: {
        features: {
          // Fixes: https://github.com/tailwindcss/tailwindcss/issues/1190#issuecomment-546621554
          'focus-within-pseudo-class': false
        }
      }
    },
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    }
  },
  loaders: [
    {
      test: /\.(jpe?g|png)$/i,
      loaders: [
        'webp-loader'
      ]
    }
  ],
  ssr: true,
  serverMiddleware: [
  ],
  purgeCSS: {
    whitelist: ['dark-mode']
  },
  privateRuntimeConfig: {
    gmailUser: process.env.GMAIL_USER,
    gmailPass: process.env.GMAIL_PASS,
    gmailReceiver: process.env.GMAIL_RECEIVER
  },
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  }
}
