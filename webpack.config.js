const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // Add your existing rules here
      // ...

      // Add the new rule for handling SVG files
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000, // Inline files smaller than 10 kB
            },
          },
        ],
      },
    ],
  },
};
