const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Config = require('webpack-chain')

const config = new Config()
config.entry('index').add('./src/index.js')
config.entry('about').add('./src/about.js')
config.entry('contacts').add('./src/contacts.js')

config.module
  .rule('scss')
  .test(/\.s[ac]ss$/)
  .use('style')
  .loader('style-loader')
  .end()
  .use('css')
  .loader('css-loader')
  .end()
  .use('postcss')
  .loader('postcss-loader')
  .options({
    ident: 'postcss',
    plugins: [require('tailwindcss'), require('autoprefixer')],
  })
  .end()
  .use('sass')
  .loader('sass-loader')
  .end()

config.module
  .rule('pug')
  .test(/\.pug$/)
  .use('pug')
  .loader('pug-loader')

config.module
  .rule('js')
  .test(/\.js$/)
  .exclude.add(/node_modules/)
  .end()
  .use('babel-loader')
  .loader('babel-loader')
  .options({ presets: ['@babel/preset-env'] })

config.resolve.alias
  .set('~', path.resolve(__dirname, 'src'))
  .set('@', path.resolve(__dirname, 'src'))

config
  .plugin('html-index')
  .use(HtmlWebpackPlugin, [
    {
      template: './src/pages/index.pug',
      inject: true,
      chunks: ['index'],
      filename: 'index.html',
    },
  ])
  .end()
  .plugin('html-about')
  .use(HtmlWebpackPlugin, [
    {
      template: './src/pages/about.pug',
      inject: true,
      chunks: ['about'],
      filename: 'about.html',
    },
  ])
  .end()
  .plugin('html-contacts')
  .use(HtmlWebpackPlugin, [
    {
      template: './src/pages/contacts.pug',
      inject: true,
      chunks: ['contacts'],
      filename: 'contacts.html',
    },
  ])
module.exports = config
// module.exports = {
//   // https://webpack.js.org/concepts/entry-points/#multi-page-application
//   entry: {
//     index: './src/index.js',
//     about: './src/about.js',
//     contacts: './src/contacts.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.s[ac]ss$/,
//         use: ['style-loader', 'css-loader', 'sass-loader'],
//       },
//       {
//         test: /.\pug$/,
//         use: ['pug-loader'],
//       },
//       {
//         test: /\.js$/,
//         loader: 'babel-loader',
//         exclude: /node_modules/,
//         options: {
//           presets: ['@babel/preset-env'],
//         },
//       },
//     ],
//   },
//   resolve: {
//     alias: {
//       '~': path.resolve(__dirname, 'src'),
//       '@': path.resolve(__dirname, 'src'),
//     },
//   },

//   // https://webpack.js.org/concepts/plugins/
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/pages/index.pug',
//       inject: true,
//       chunks: ['index'],
//       filename: 'index.html',
//     }),
//     new HtmlWebpackPlugin({
//       template: './src/pages/about.pug',
//       inject: true,
//       chunks: ['about'],
//       filename: 'about.html',
//     }),
//     new HtmlWebpackPlugin({
//       template: './src/pages/contacts.pug',
//       inject: true,
//       chunks: ['contacts'],
//       filename: 'contacts.html',
//     }),
//   ],
// }
