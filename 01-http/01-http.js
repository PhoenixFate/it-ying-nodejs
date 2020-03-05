// 启动程序
// node xxx.js
// 热部署程序
// supervisor xxx.js

console.log("hello node js");

// 创建第一个nodejs的web应用程序
// node-http-server生成代码

// 表示引入http模块
/**
 * request
 * 
 * response
 * 
 */
const http = require('http');
const url = require("url");
http.createServer(function (request, response) {
    //console.log(request)
    console.log("url: " + request.url)
    //http://127.0.0.1:8001?name=tom&age=20
    //获得url里面的变量
    //url.parse(request.url, true)
    if(request.url!="/favicon.ico"){
        let getValue=url.parse(request.url, true).query
        console.log(getValue)
        console.log("name: "+getValue.name)
        console.log("age: "+getValue.age)
    }
    //设置响应头
    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    //给页面返回的信息
    response.write("你好 中文测试 hello world2")
    // 结束响应
    response.end();
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');


