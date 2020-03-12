const path = require("path");
const webpack = require("webpack");

main();

function main() {
  console.log("Starting building examples");

  webpack(
    {
      entry: path.resolve(__dirname, "app"),
      output: {
        path: path.resolve(__dirname, "output"),
        filename: "bundle.js"
      },
      resolve: {
        extensions: [".js", ".md"]
      },
      module: {
        rules: [
          {
            test: /\.md$/,
            use: [
              "html-loader",
              path.resolve(__dirname, "../", "index"),
              "markdown-loader"
            ]
          }
        ]
      }
    },
    (err, stats) => {
      if (err || stats.hasErrors()) {
        // console.log(err);
        console.log(stats.compilation.errors);
      } else {
        console.log("Finished. See /output");
      }
    }
  );
}
