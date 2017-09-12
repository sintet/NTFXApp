const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
   context: path.resolve(__dirname, 'src'),

   entry: {
      home: './index.js',
      style: './styles/style.scss'
   },

   output: {
      filename: '[name].js',
      path: path.join(__dirname, 'built')
   },

   resolve: {
      extensions: ['.js']
   },
   watch: false,

   devtool: 'eval',

   module: {
      rules:[{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
               fallback: "style-loader",
               use: [
                  "css-loader",
                  "sass-loader"
               ],
            }) 
         },
         {
            test: /\.jsx?/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  plugins: ['transform-react-jsx'],
                  presets: ['env']
               }
            }
         }
      ]
   },

   plugins: [
      new webpack.optimize.UglifyJsPlugin(),
      new HtmlWebpackPlugin({
         title: 'Netflix web application',
         hash: true,
         template: './index.html'
      }),
      new ExtractTextPlugin('[name].css')
   ]
};