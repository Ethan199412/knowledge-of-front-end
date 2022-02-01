const dir = '/ethan'
const filename = dir + '/haha.jpg';

/** 这个例子解释了为什么你在运行 node 文件的时候 __filename, __dirname 不是 undefined
 * 而是有值的，利用立即执行函数，你的 nodejs 文件运行在一个函数里，这个函数里面有名为 __filename
 * __dirname 的变量，所以他们不为空，这种思想我管他叫注入环境变量的思想。但是，这个函数时内嵌
 * 在 node 里的，因此对使用者透明
 */
(function (exports, require, module, __filename, __dirname) {
    console.log({
        __dirname,
        __filename
    })
})(undefined, undefined, undefined, filename, dir)

const fs =require('fs')
fs.readF