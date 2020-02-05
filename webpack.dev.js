const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: './src/index.js',
    about: './src/about.js',
    contacts: './src/contacts.js',
  },

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 8080,
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './public/about.html',
      inject: true,
      chunks: ['about'],
      filename: 'about.html',
    }),
    new HtmlWebpackPlugin({
      template: './public/contacts.html',
      inject: true,
      chunks: ['contacts'],
      filename: 'contacts.html',
    }),
  ],
}
