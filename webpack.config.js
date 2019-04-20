let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './index.js'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            filename: "index.html",
            title: '学习正则表达式',
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        contentBase: path.resolve(__dirname,'./dist'),
        hot: true,
        port: 3000,
        open:true,
    }
}