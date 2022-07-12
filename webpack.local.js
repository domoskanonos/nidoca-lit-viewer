import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";

export default {
  target: "web",
  entry: {
    main: "./src/index.ts",
  },
  devServer: {
    port: 8080,
  },
  resolve: {
    fullySpecified: false,
    extensions: [".js", ".ts", ".js", "css"],
  },
  performance: {
    maxEntrypointSize: 700000,
  },
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {loader: "ts-loader", options: {transpileOnly: true}},
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({template: "./src/index.html"}),
    new CopyPlugin({
      patterns: [{from: "src/main.css", to: "main.css"}],
    }),
  ],
};
