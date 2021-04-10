const path = require('path')
const ConsoleLogOnBuildWebpackPlugin = require('./consolePlugin')

// Tips loader 的执行顺序是从下到上
module.exports = {
  mode: 'none',
  entry: './file.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'file.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: 'css-loader'
      },
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  plugins: [new ConsoleLogOnBuildWebpackPlugin()]
}
