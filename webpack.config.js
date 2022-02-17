const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HTMLWeebPackPlugin = require('html-webpack-plugin');

if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: path.resolve(__dirname, '.env.production') });
} else {
  dotenv.config({ path: path.resolve(__dirname, '.env.development') });
}

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new HTMLWeebPackPlugin({
      template: './index.html',
    }),

    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
};
