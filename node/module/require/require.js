/** 这个案例为了帮助你了解 node 里面是如何加载模块的
 * 对于第三方模块，node 会根据 module.paths 这个数组里面
 * 的每个元素的路径依次寻找，在下面的例子中，首先找 x/KnowledgeOfFrontEnd/node/module/node_modules
 * 再找 x/KnowledgeOfFrontEnd/node/node_modules 下
 * 再找 x/KnowledgeOfFrontEnd/node_modules 下，依次类推
 * 对于 node 而言，modules 对象有点类似浏览器 js 里面的 window，document
 * 是 node 帮你注进去的对象
 */
console.log('[p0] module', module, '__filename', __filename, '__dirname', __dirname)
console.log('[p1] __dirname', __dirname)

// require seudo code
/*
Module._load = function (request, parent, isMain) {
    // 相对路径转绝对路径
    var filename = Module.__resolveFilename(request, parent)

    // 如有缓存，那么从内存拿出缓存，直接返回 exports
    var cachedModule = Module._cache[filename]

    if (cachedModule) {
        return cachedModule.exports
    }

    // 从硬盘中根据绝对路径读取文件，放入内存
    var module = new Module(filename, parent)
    Module._cache[filename] = module

    // 加载模块
    try {
        module.load(filename)
        hadException = false
    }
    finally {
        if (hadException) {
            delete Module._cache[filename]
        }
    }

    return module.exports
}
*/