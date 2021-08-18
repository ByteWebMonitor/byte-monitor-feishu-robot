// webpack.config.js
const path = require('path');
module.exports = {
    entry: path.join(__dirname, "/src/main.js"), // 入口文件
    output: {
        path: path.join( __dirname, "/dist"), // 打包后的文件存放的地方 
        filename: "index.js" // 打包后输出文件的文件名
    },
    // webpack.config.js
    resolve: {
        // 1.不需要node polyfilss
        alias: {
        crypto: false,
        http:false,
        url:false,
        https:false,
        util:false
        }
    },
}
