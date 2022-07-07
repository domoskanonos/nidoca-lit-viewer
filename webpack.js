import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import path from "path";

export default {
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
    path: path.resolve().concat("/public"),
    filename: "nidoca-lit-viewer.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new CopyPlugin({
      patterns: [{from: "src/main.css", to: "main.css"}],
    }),
  ],
};
