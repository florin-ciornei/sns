module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/css/_materialColorsVariables.scss";@import "@/assets/css/_variables.scss";`
      }
    }
  }
};
