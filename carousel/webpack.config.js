const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.js",
        library: "reactCarousel",
        libraryTarget: "umd",
    },
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
                // flags to apply these rules, even if they are overridden (advanced option)
                loader: "eslint-loader",
                enforce: "pre",
                // the loader which should be applied, it'll be resolved relative to the context
                // -loader suffix is no longer optional in webpack2 for clarity reasons
                // see webpack 1 upgrade guide
                
                // options for the loader
            },


            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            }
        ]
    }
};