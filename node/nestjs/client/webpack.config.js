const path = require("path");
const webpack = require("webpack");

const port = 3009

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg)$/,
        use: ['file-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port,
    publicPath: `http://localhost:${port}/dist/`,
    // historyApiFallback: {
    //   rewrites: [{
    //     from: '/ref',
    //     to: '/'
    //   }, {
    //     from: '/context',
    //     to: '/'
    //   }, {
    //     from: '/hoc',
    //     to: '/'
    //   }, {
    //     from: '/redux-thunk',
    //     to: '/'
    //   }]
    // },
    proxy: {
      '/api': {
        target: 'http://localhost:3008/',
        changeOrigin: true,
        pathRewrite: { '/api': '' }
      }
    }
  },
  devtool: 'eval-cheap-module-source-map',
};