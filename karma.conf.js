module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['jasmine'],
        files: [
            {pattern: 'tests.webpack.js'}
        ],
        preprocessors: {
            'tests.webpack.js': ['webpack', 'sourcemap']
        },
        reporters: ['dots'],
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['airbnb', 'es2015', 'react', 'stage-0']}},
                    {test: /\.json$/, loader: 'json-loader'}
                ]
            },
            externals: {
                'cheerio': 'window',
                'react/addons': true,
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true
            }
        },
        webpackServer: {
            noInfo: true
        }
    });
};