const path = require('path')

module.exports = {
  mode: 'development',
  entry: './scr/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'bundle')
  },
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
              publicPath: 'bundle/images/',
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
                    require("autoprefixer") /*在这里添加*/
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