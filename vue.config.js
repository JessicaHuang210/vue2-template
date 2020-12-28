module.exports = {
  publicPath: "./",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/scss/_variables.scss";
                      @import "~@/scss/element-variables.scss";
                      @import "~@/scss/utils/_media.scss";
        `
      }
    }
  }
};
