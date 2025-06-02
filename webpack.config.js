const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')  // <-- добавляем импорт

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/js/main.js'),
    output: {
        path:path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test:/\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            },
            {
                test:/\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        port: 9000,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'dist')
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({               // <-- добавляем плагин
            template: path.resolve(__dirname, 'src/index.html'),  // укажи путь к твоему шаблону
            filename: 'index.html'
        })
    ]
}
