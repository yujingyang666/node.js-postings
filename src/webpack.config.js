var webpack = require('webpack')
var path = require('path')
//var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, "js/main.js"),
    output: {
        path: path.join(__dirname, "../public"),
        filename: "js/main.js"
    },
    module: {
        rules: [{
            test: /\.less$/,
            // use: ExtractTextPlugin.extract({
            //     fallback: "style-loader",
            use: ["style-loader","css-loader", "less-loader" ]
            //}) //把 css 抽离出来生成一个文件
        }]
    },
    resolve: {
        alias: {
            less: path.join(__dirname, "less")
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery"
        }),
        // new ExtractTextPlugin("css/index.css"),
        // new webpack.LoaderOptionsPlugin({
        //     options: {
        //         postcss: [
        //             autoprefixer(),
        //         ]
        //     }
        // }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        })
    ]


}