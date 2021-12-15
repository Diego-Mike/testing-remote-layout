const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = (_, argv) => ({
  output: {
    publicPath:
      argv.mode === "development"
        ? "http://localhost:8081/"
        : "https://testing-remote-layout.vercel.app/",
  },

  devServer: {
    port: 8081,
  },

  entry: "./src/website",

  module: {
    rules: [
      {
        test: /\.ts$|tsx/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-react",
                {
                  runtime: "automatic",
                },
              ],
              "@babel/preset-env",
              "@babel/preset-typescript",
            ],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "layout",
      filename: "remoteEntry.js",
      exposes: {
        "./Layout": "./src/website/Layout",
      },
      shared: require("./package.json").dependencies,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
});
