const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

console.log(process.argv)

let plat
try {
    plat = process.argv[4] ? process.argv[4].split('=')[1] : 'vue'
} catch (error) {
    plat = 'vue'
}

module.exports = {
  entry: plat === 'vue' ? "./src/index-vue.js" : "./src/index-react.js",
  mode: "development",
  stats: "errors-only",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        // options: { presets: [["@babel/env",{
        //     "useBuiltIns":"usage",
        //     "corejs":3,
        //     "targets":{
        //         "browsers":">5%"
        //     }
        // }],'@babel/react'] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      }
    ]
  },
  resolve: {
    extensions:["*", ".js", ".jsx",'.vue'] ,
    alias: { // 路径别名
      root:path.resolve(__dirname),
      common: path.resolve(__dirname,'common'),
      vue$: 'vue/dist/vue.runtime.esm.js', // 相比於 vue.esm.js 小 30% 左右
    }
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8066,
    publicPath: "http://localhost:8066/dist/",
    hotOnly: true,
    hot:true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
        filename: 'index.html',  // 默认名 index.html
        template: path.join(__dirname, './template/index.html')
        //inject:false   // 不引入css，js等。默认true
    }),
    new VueLoaderPlugin()
  ]
};