const obj = require('./commonjs-b.js')
const { a, addA } = obj
addA()
console.log('[p0] a', a)