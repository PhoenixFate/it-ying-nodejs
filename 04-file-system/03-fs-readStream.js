const fs=require("fs")

//通过fs.createReadSteam 从文件流中读取数据

var readSteam=fs.createReadStream("input.txt")

let content=''
let count=0;
readSteam.on('data',function(chunk){
    console.log("接受到一次广播")
    console.log(count++)
    //console.log(chunk.toString())
    content+=chunk
})

//读取完成
readSteam.on("end",function(chunk){
    console.log("读取完成")
    console.log(chunk)
    console.log("------------------------------------------------")
    //console.log(content)
    console.log("------------------------------------------------")
})

readSteam.on("error",function(error){
    console.log(error)
})