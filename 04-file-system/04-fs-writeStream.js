const fs=require("fs")


//通过fs.createWriteStream 写入文件
const writeStream=fs.createWriteStream("output.txt")
let data="这是要写入的数据\n"

writeStream.write(data,"utf-8")
let data2="这是要写入的数据2"
writeStream.write(data2,"utf-8")

//标记写入完成

writeStream.on("finish",function(){
    console.log("写入完成")
})
