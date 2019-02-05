const { resolve } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { NoEmitOnErrorsPlugin, HotModuleReplacementPlugin } = require('webpack');

const config = {
  context: resolve('src'),
  entry: {
    main: './index.jsx',
  },

  output: {
    path: resolve('build'),
    publicPath: '/',
  },

  mode: 'development',

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      node_modules: resolve(__dirname, '../../node_modules'),
    },
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
    ],
  },

  plugins: [
    new NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: false,
    }),
    new HotModuleReplacementPlugin(),
  ],

  devServer: {
    historyApiFallback: true,
    hot: true,
  }
};

module.exports = config;