module.exports = (ctx) => {
  // This flag is set when loading configuration by this package.
  if (ctx.meteor) {
    const config = {
      plugins: {
        "postcss-easy-import": {},
      },
    };

    if (ctx.env === "production") {
      // "autoprefixer" is reported to be slow,
      // so we use it only in production.
      config.plugins.autoprefixer = {
        browsers: ["last 2 versions"],
      };
    }

    return config;
  } else {
    return {};
  }
};
