const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const core = require('./webpack.core')

const ip = require('ip')
const address = ip.address()

module.exports = merge(core, {
  devtool: 'inline-source-map',
  mode: 'development',
  plugins: [
    new webpack.BannerPlugin({
      banner: 'console.warn("This script is development version.");',
      raw: true,
      exclude: /\.css?$/
    })
  ],
  watchOptions: {
    ignored: /node_modules/
  },
  devServer: {
    contentBase: path.join(__dirname, '/../dist'),
    host: address ? `${address}` : '',
    port: 3000,
    open: true,
    openPage: 'index.html',
    clientLogLevel: 'error',
    watchContentBase: true
  }
})
