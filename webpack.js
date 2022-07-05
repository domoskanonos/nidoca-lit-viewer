const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {loader: "ts-loader", options: {transpileOnly: true}},
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  optimization: {
    minimize: true,
  },
  performance: {
    maxEntrypointSize: 700000,
  },
  mode: "production",
  output: {
    path: path.resolve().concat("/public/webcomponents"),
    filename: "nidoca-webcomponents.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new CopyPlugin({
      patterns: [
        {from: "src/nidoca.css", to: "nidoca.css"},
        {from: "src/logo.svg", to: "logo.svg"},
      ],
    }),
  ],
};
