var path = require('path');

const RequireJsResolverPlugin = require('@sdinteractive/requirejs-resolver');


var srcPath  = path.join(__dirname, '/view/frontend/web/js/script.js'),
    distPath = path.join(__dirname, '/view/frontend/web/js/dist');

module.exports = {
    entry: srcPath,
    output: {
        path: distPath,
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
        },
        plugins: [
            new RequireJsResolverPlugin({
                configPath: '/Users/martinssaukums/Documents/Projects/www/m22-2/pub/static/frontend/Magento/luma/en_US/requirejs-config.js',
            }),
        ],
    },
}