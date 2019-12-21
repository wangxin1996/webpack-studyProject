const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './scr/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'bundle')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(pag|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: 'bundle/images',
            }
          }
        ]
      },{
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },{
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },{
            loader: "postcss-loader",
            options: {
                plugins: [
                    require("autoprefixer")
                ]
            }
          }
        ]
      },{
        test: /\.stylus$/,
        use: [
          {
            loader: "style-loader"
          },{
            loader: "css-loader",
            options: {
              importLoaders: 2, 
              modules: true
            }
          },{
            loader: "stylus-loader"
          }
        ]
      }
    ]
  },
}