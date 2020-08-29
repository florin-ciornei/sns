module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/sns/dist/" : "/",

  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/css/_materialColorsVariables.scss";@import "@/assets/css/_variables.scss";`
      }
    }
  },

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false
    }
  }
};