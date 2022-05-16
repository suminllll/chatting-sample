const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "async-node",
  mode: "production",
  entry: ["../app.js"],
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "../.next"),
  },
  externalsPresets: {
    node: {
      fs: "empty",
      net: "empty",
    },
  },
  browser: {
    fs: false,
    path: false,
    os: false,
  },
  externals: [nodeExternals()],
};
