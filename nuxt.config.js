export default {
  mode: 'spa',

  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: ['@nuxt/typescript-build'],
  /*
  ** Nuxt.js modules
  */
  modules: ['nuxt-purgecss'],
  build: { },
};
