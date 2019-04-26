const webpack = require('webpack')
const merge = require('webpack-merge')
const core = require('./webpack.core')

module.exports = merge(core, {
  devtool: 'inline-source-map',
  mode: 'development',
  plugins: [
    new webpack.BannerPlugin({
      banner: 'console.warn("This script is development version.");',
      raw: true,
      exclude: /\.css?$/
    })
  ]
})
