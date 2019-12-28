const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.merge.js')

const dev = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: './bundle',
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = merge(common,dev)