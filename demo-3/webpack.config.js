const path = require('path')

// 构建不同环境
const serverConfig = {
  mode: 'none',
  target: 'node',
  entry: path.join(__dirname, './entry.js'),
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'lib.node.js'
  }
}

const browserConfig = {
  mode: 'none',
  target: 'web',
  entry: path.join(__dirname, './entry.js'),
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'lib.js'
  }
}

module.exports = [serverConfig, browserConfig]
