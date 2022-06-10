const WebpackUserscript = require("webpack-userscript");
const path = require("path");
const dev = process.env.NODE_ENV === "development";

module.exports = {
  mode: dev ? "development" : "production",
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "pokescripter.user.js",
  },
  devServer: {
    static: { directory: path.join(__dirname, "dist") },
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new WebpackUserscript({
      headers: {
        version: dev ? `[version]-build.[buildNo]` : `[version]`,
        match: "https://www.pokeclicker.com/",
        "run-at": "document-body",
      },
    }),
  ],
};
