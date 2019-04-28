const path = require('path')
const webpack = require('webpack')
const entries = require('webpack-entries')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackBuildNotifierPlugin = require('webpack-build-notifier')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const srcPath = path.join(__dirname, '/../src')
const distPath = path.join(__dirname, '/../dist')
const eslintConfig = path.join(__dirname, '/../.eslintrc')
const htmlEntries = entries(`${srcPath}/**/!(_*).pug`, true)

const config = {
  entry: entries(`${srcPath}/js/!(_*|*spec).js`, true),
  output: {
    filename: 'assets/js/[name].js',
    path: `${distPath}`,
    sourceMapFilename: 'maps/[name].map',
    jsonpFunction: 'fr'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.styl'],
    modules: [
      `${srcPath}/js`,
      path.join(process.cwd(), 'node_modules'),
      path.join(__dirname, '../node_modules'),
      'node_modules'
    ]
  },
  resolveLoader: {
    modules: [path.join(process.cwd(), 'node_modules'), path.join(__dirname, '../node_modules'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre'
      },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  modules: false,
                  useBuiltIns: 'usage',
                  corejs: 3
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.pug$/,
        // loader: 'pug-loader'
        use: {
          loader: 'pug-loader',
          options: { pretty: true }
        }
      },
      {
        test: /\.styl(us)?$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { url: false }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')({
                  grid: true
                })
              ]
            }
          },
          {
            loader: 'stylus-loader',
            options: {
              'include css': true,
              preferPathResolver: 'webpack'
            }
          }
        ]
      },
      {
        test: /\.(glsl|frag|vert|vs|fs)$/,
        loader: 'webpack-glsl-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackBuildNotifierPlugin({
      title: 'Webpack Build',
      suppressSuccess: true
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          configFile: eslintConfig,
          failOnError: true
        }
      }
    }),
    new CopyWebpackPlugin(
      [
        {
          from: './+(images|video|fonts)/**/*',
          to: 'assets/'
        }
      ],
      { context: `${srcPath}` }
    ),
    new MiniCssExtractPlugin({
      filename: 'assets/css/style.css'
    })
  ],
  performance: {
    hints: false
  },
  watchOptions: {
    ignored: /node_modules/
  },
  devServer: {
    contentBase: path.join(__dirname, '/../dist'),
    port: 3000,
    open: true,
    openPage: 'index.html',
    watchContentBase: true
  }
}

/* ページ数だけhtmlを出力してもらうように */
for (let key of Object.keys(htmlEntries)) {
  config.plugins.push(
    new HtmlWebpackPlugin({
      inject: false,
      filename: `${key}.html`,
      template: htmlEntries[key]
    })
  )
}

module.exports = config