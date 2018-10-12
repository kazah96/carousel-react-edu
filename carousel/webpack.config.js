const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        library: "MyLibrary",
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
        ]
    }
};