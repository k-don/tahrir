var path = require('path');

module.exports = {
    entry: './src/main/js/app-render.js',
    devtool: 'sourcemaps',
    cache: true,
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'es2015', 'react', 'stage-0']
                    }
                }
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            }
        ]
    }
};