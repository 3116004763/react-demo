const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  stats: "errors-only",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(html|ejs)$/,
        exclude: /node_modules/,
        loader: 'html-loader',
        options: {
            attributes: {
                list: [
                  {
                    tag: 'img',
                    attribute: 'src',
                    type: 'src',
                  },
                  {
                    tag: 'link',
                    attribute: 'href',
                    type: 'src',
                    filter: (tag, attribute, attributes) => {
                      if (!/stylesheet/i.test(attributes.rel)) {
                        return false;
                      }
                      if (
                        attributes.type &&
                        attributes.type.trim().toLowerCase() !== 'text/css'
                      ) {
                        return false;
                      }
                      return true;
                    },
                  },
                ]
            }
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
    contentBase: './dist',
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
        filename: 'index.html',  // 默认名 index.html
        template: path.join(__dirname, './template/index.html')
        //inject:false   // 不引入css，js等。默认true
    })
  ]
};