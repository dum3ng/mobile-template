const path = require('path')
const util = require('util')
const glob = require('glob')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const baseConfig = require('./webpack.base')

const buildPath = path.resolve(__dirname, 'dist')

baseConfig.mode('production')

baseConfig
  .plugin('clean')
  .use(CleanWebpackPlugin, [{}])
  .before('html-index')

// remove the `style-loader` to use minicssextractplugin in production
baseConfig.module
  .rule('scss')
  .uses.delete('style')
  .end()
  .use('minicss')
  .loader(MiniCssExtractPlugin.loader)
  .before('css')

baseConfig.plugin('minicss').use(MiniCssExtractPlugin, [
  {
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].[contenthash].css',
  },
])

const srcPath = path.resolve(__dirname, 'src')
baseConfig.plugin('purgecss').use(PurgecssPlugin, [
  {
    paths: glob.sync(`${srcPath}/**/*`, { nodir: true }),
  },
])

baseConfig.optimization
  .minimizer('js')
  .use(UglifyJsPlugin, [
    {
      cache: true,
      parallel: true,
      sourceMap: true,
    },
  ])
  .end()
  .minimizer('css')
  .use(OptimizeCssAssetsPlugin, [{}])

baseConfig.output.path(buildPath).filename('js/[name]-[hash].js')

module.exports = baseConfig.toConfig()
// module.exports = merge(baseConfig, {
//   mode: 'production',
//   output: {
//     path: ,
//     filename: 'js/[name]-[hash].js',
//   },
// })
// console.log(util.inspect(baseConfig.toConfig(), { depth: null }))
