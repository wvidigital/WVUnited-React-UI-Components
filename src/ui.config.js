const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        // I haven't used SCSS in the base example, but it's here for you if you
        // want! If you want to use CSS, you can change this next like's regex to
        // /\.(css|scss)$/ or even just /\.css$/
        test: /\.(css|scss)$/,
        use: [
          // These three libraries are commonly used together to turn Sass into
          // CSS, then be able to load the CSS directly with imports. From there
          // It gets put in the DOM for you.
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        // Some image formats so you can import images
        test: /\.(png|gif|jpg|woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      },

    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'ui.js',
  },
};