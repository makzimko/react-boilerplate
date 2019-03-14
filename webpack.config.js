const { resolve } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { NoEmitOnErrorsPlugin, HotModuleReplacementPlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
        ],
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
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],

  devtool: 'source-map',

  devServer: {
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        pathRewrite: {
          '/api/': '/',
        },
      },
    },
  },
};

module.exports = config;
