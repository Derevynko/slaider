const path = require("path")
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
module.exports = {
    context:path.resolve(__dirname, 'src'),
    entry:'./sliderjs.js',
    output: {
        filename:"bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HTMLWebpackPlugin({
            template:"./sliderhtml.html"
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/images'),
                    to:path.resolve(__dirname, 'dist/images')
                }
            ]

        })
    ],
    module:{
        rules:[
            {
            test:/\.css$/,
            use:['style-loader', 'css-loader']
            },
        ]
    }
}