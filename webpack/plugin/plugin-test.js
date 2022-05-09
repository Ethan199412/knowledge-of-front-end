module.exports = class MyPlugin {
    constructor(props) {

    }

    apply = (compiler) => {
        // config 参数装入 compiler 对象后执行
        compiler.plugin("entry-option", function (params) {
            console.log("entry option");
        });

        // 所有插件装入内存后执行
        compiler.plugin("after-plugins", function (params) {
            console.log("after plugins");
        });

        compiler.plugin("after-resolvers", function (params) {
            console.log("after resolvers");
        });

        // compile 你可以理解为，准备开始去加载文件生成 chunk 了。
        compiler.plugin("compile", function (params) {
            console.log("[p1] The compile is starting to compile...");
        });

        // compilation 对象创建后执行
        compiler.plugin("compilation", function (compilation, params) {
            console.log("[p2] The compile is starting a new compilation...");
            // 4
            compilation.plugin("optimize", function () {
                console.log("[p4] The compilation is starting to optimize file...");
            });
        });

        // 3
        compiler.plugin("make", function (compiler, callback) {
            console.log("[p3] the compile is making file...");
            callback();
        });

        // 
        compiler.plugin("after-compile", function (compilation, callback) {
            console.log("[p5] The compile has aleardy compiled");
            callback()
        });

        // 6
        compiler.plugin("emit", function (compilation, callback) {
            console.log("[p6] The compilation is going to emit files...");
            callback();
        });

        // bundle.js 输出后会立刻执行，should-emit 事件，返回布尔值，判断是否输出
        compiler.plugin('after-emit', function (compilation, callback) {
            console.log('[p7] The compliation has aleardy emitted');
            callback()
            // console.log(compilation)
        })

        compiler.plugin('done', function (compilation) {
            console.log('done');
            // console.log(compilation)
        })
    }
}