const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  output: {
    path: path.join(__dirname, "/public"), // the bundle output path
    filename: "app.bundle.js", // the name of the bundle
  },
  devServer: {
    port: 3030,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Weather app',
      template: './src/template/index.html',
      inject: false
    })
  ],
  resolve: { extensions: [".*", ".js", ".jsx"] },
   module: {
     rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: {
                  localIdentName: "[name]__[local]___[hash:base64:5]",
              },
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
        }
      },
      {
        test: /\.svg|png$/i,
        use: {
          loader: 'url-loader',
          options: {
          encoding: false,
          },
        },
      },
    ]
  }
};