const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// For GitHub Pages: repo is at /webpack-and-ci-cd/ so assets must load from that path
const basePath = process.env.BASE_PATH || "/";

module.exports = {
  entry: "./src/index.js", // The entry point of your app
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: basePath, // Required for GitHub Pages subpath
    clean: true, // Cleans the dist folder before every build
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Look for .js or .jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/, // Look for .css files
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Use this HTML as a template
    }),
  ],
  devServer: {
    static: "./dist",
    port: 3000, // Run on port 3000
    open: true, // Open browser automatically
    hot: true,
  },
  mode: "development",
};
