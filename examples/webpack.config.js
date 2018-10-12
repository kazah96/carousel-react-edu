const path = require('path');

module.exports = {
  devtool: "source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,

        // flags to apply these rules, even if they are overridden (advanced option)
        loader: "babel-loader",
        // the loader which should be applied, it'll be resolved relative to the context
        // -loader suffix is no longer optional in webpack2 for clarity reasons
        // see webpack 1 upgrade guide
        options: {
          presets: ["@babel/preset-env"]
        },
        // options for the loader
      },
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        enforce: 'pre',
      },
    ]
  }
};