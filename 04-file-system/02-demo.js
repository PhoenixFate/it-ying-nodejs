//1.判断是否有upload目录，没有则创建
const fs = require("fs")

fs.stat("upload", function (error, stats) {
    if (error) {
        // console.log(error)
        // 没有则创建目录
        fs.mkdir("upload", function (error) {
            if (error) {
                console.log(error)
                return false;
            }
            console.log("创建upload成功")
        })
        return false
    }else{
        console.log("目录已经存在")
        console.log(stats.isDirectory())
    }

})


// for循环中的异步没有效果
for(let i=0;i<3;i++){
    setTimeout(function(data){
        console.log(i)
    },100)
}