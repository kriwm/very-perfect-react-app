const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

const stylesLoaderRule = {
  test: /\.(css|scss)$/,
  use: ['style-loader', 'css-loader', 'sass-loader']
};

const imagesLoaderRule = {
  test: /\.(png|jpg|gif|svg)$/,
  use: [
    {
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: '[name]-[sha512:hash:base64:7].[ext]',
        publicPath: './'
      }
    }
  ]
};

const filesLoaderRule = {
  test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
  use: [{
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      outputPath: 'fonts/',
      publicPath: './'
    }
  }]
};

const jsLoaderRule = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: [{
    loader: 'babel-loader',
    query: {
      cacheDirectory: true
    }
  }]
};

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      jsLoaderRule,
      imagesLoaderRule,
      filesLoaderRule,
      stylesLoaderRule
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig
  ]
}
