const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.merge.js')

const prod = {
  mode: 'production',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = merge(common,prod)