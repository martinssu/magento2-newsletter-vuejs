var path = require('path');

var srcPath  = path.join(__dirname, '/view/frontend/web/js/script.js'),
    distPath = path.join(__dirname, '/view/frontend/web/js/dist');

module.exports = {
    entry: srcPath,
    output: {
        path: distPath,
        filename: 'index.js',
        libraryTarget: 'amd',
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
}