const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const core = require('./webpack.core');

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
    contentBase: path.join(__dirname, 'build'),
    // host: '0.0.0.0',
    port: 3000,
    open: true,
    openPage: '',
    clientLogLevel: 'error',
    // useLocalIp: true,
    watchContentBase: true
  }
});
