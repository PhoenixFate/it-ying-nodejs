const fs=require("fs")

let readStream=fs.createReadStream("input.txt")
let writeStream=fs.createWriteStream("output2.txt")

//管道读写操作
//将readstream流中的数据直接写入writeStream流中
readStream.pipe(writeStream)

console.log("finished")
