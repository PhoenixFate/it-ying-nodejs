const fs=require("fs")
const events=require("events")
let eventEmitter=new events.EventEmitter()

//通过eventEmitter得到数据
function getData(){
    fs.readFile("a.txt",function(error,data){
        eventEmitter.emit("data",data.toString())
    })
}

//执行方法
getData()
//监听广播
eventEmitter.on("data",function(data){
    console.log(data)
})

