var fs=require("fs")

console.log("1")
var data=getData()
console.log(data)
//通过回调函数得到数据
getData2(function(data3){
    console.log(data3)
})

console.log("3")
//这样子是不能得到数据的
function getData(){
    fs.readFile("a.txt",function(error,data){
        console.log("2")
        return data
    })
}

//通过回调函数得到数据
function getData2(callback){
    fs.readFile("a.txt",function(error,data){
        // return data
        callback(data.toString())
    })
}

//使用event模块处理异步
/*
Node.js 事件循环:
Node.js 是单进程单线程应用程序，但是通过事件和回调支持并发，所以性能非常高。
Node.js 的每一个 API 都是异步的，并作为一个独立线程运行，使用异步函数调用，并处理并发。
Node.js 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件，
如下实例：
*/
// 引入 events 模块

//广播和接受广播
const events=require("events")
let eventEmitter=new events.EventEmitter()
eventEmitter.on("to_son",function(data){
    console.log(data)
})

//监听广播
eventEmitter.on("to_parent",function(data){
    console.log(data)
    eventEmitter.emit("to_son","发送的数据 to_son")
})

//发送广播
setTimeout(function(){
    eventEmitter.emit("to_parent","发送的数据 to_parent")
},1000)

