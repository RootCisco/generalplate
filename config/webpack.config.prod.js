const webpack = require('webpack')
const merge = require('webpack-merge')
const core = require('./webpack.core')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(core, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 5,
          compress: {
            warnings: false,
            drop_console: true
          },
          mangle: {
            keep_fnames: true
          },
          output: {
            beautify: false,
            comments: /^\**!|@preserve|@license|@cc_on|LICENSE|License|license/
          },
          ie8: true
        }
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  plugins: [new webpack.optimize.AggressiveMergingPlugin(), new webpack.optimize.OccurrenceOrderPlugin()]
})
