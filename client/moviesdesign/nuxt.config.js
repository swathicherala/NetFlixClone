import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - moviesdesign',
    title: 'moviesdesign',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
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
    }
  },

  axios:{
    baseURL: 'http://localhost:3000/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // auth: {
  //   strategies: {
  //     local: {
  //       // token: {
  //       //   property: 'token',
  //       //   global: true,
  //       //   // required: true,
  //       //   //  type: 'Bearer',
  //       // },
  //       // user: {
  //       //   property: 'user',
  //       //   // autoFetch: true
  //       // },
  //       endpoints: {
  //         login: { url: '/user/generateToken', method: 'post' ,propertyName :false },
  //         logout: { url: '/api/auth/logout', method: 'post' },
  //         user: { url: '/auth/user', method: 'get',propertyName: true}
  //       },
  //       // tokenRequired: true,
  //       tokenType: '',
  //       // tokenName: 'Authorization'
  //     }
  //   }
  // },
  auth: {
    strategies: {
      local: {
//      scheme: "refresh",
        token: {
          property: "token",
          global: true,
          required: true,
          type: "Bearer"
        },
        user: {
          property: "user",
          autoFetch: true
        },
//      refreshToken: {  // it sends request automatically when the access token expires, and its expire time has set on the Back-end and does not need to we set it here, because is useless
//        property: "refresh_token",
//        data: "refresh_token",
//      },
        endpoints: {
          login: { url: "/login", method: "post" },
//        refresh: { url: "/api/auth/refresh-token", method: "post" },
          logout: false, //  we don't have an endpoint for our logout in our API and we just remove the token from localstorage
          user: { url: "/user", method: "post" }
        }
      }
    }
  },

}
