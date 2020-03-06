/*
 1. fs.stat  检测是文件还是目录
 2. fs.mkdir  创建目录
 3. fs.writeFile  创建写入文件
 4. fs.appendFile 追加文件
 5. fs.readFile 读取文件
 6. fs.readdir读取目录
 7. fs.rename 重命名
 8. fs.rmdir  删除目录
 9. fs.unlink删除文件
*/

const fs=require("fs")
// 1. fs.stat  检测是文件还是目录
fs.stat('hello.js',(error,status)=>{
    if(error){
        console.log(error)
        return false
    }else {
        console.log(status)
        console.log(`file: ${status.isFile()}`)
        console.log(`directory: ${status.isDirectory()}`)
    }
})

// 2. fs.mkdir  创建目录
fs.mkdir("css",function(error){
    console.log(error)
    if(error){
        console.log("make directory failed")
        return false
    }
    console.log("make directory successfully")
})

//3. fs.writeFile  创建写入文件
//filename      (String)            文件名称
//data        (String | Buffer)    将要写入的内容，可以使字符串 或 buffer数据。
//options        (Object)           option数组对象，包含：
//· encoding   (string)            可选值，默认 ‘utf8′，当data使buffer时，该值应该为 ignored。
//· mode         (Number)        文件读写权限，默认值 438
//· flag            (String)            默认值 ‘w'
//callback {Function}  回调，传递一个异常参数err。
let content="你好 china\n"
fs.writeFile("a.txt",content,"utf-8",function(error){
    if(error){
        console.log(error)
        console.log("write file failed")
        return false
    }
    console.log("write file successfully")
})

fs.writeFile("a2.txt",content,"utf-8",function(error){
    if(error){
        console.log(error)
        console.log("write file failed")
        return false
    }
    console.log("write file successfully")
})

// 4. fs.appendFile 追加文件
let content2="这是追加的内容\n"
fs.appendFile("a.txt",content2,"utf-8",function(error){
    if(error){
        console.log(error)
        console.log("append file failed")
        return false
    }
    console.log("append file successfully")
})


// 5. fs.readFile 读取文件
fs.readFile("a.txt","utf-8",function(error,data){
    if(error){
        console.log(error)
        console.log("read file failed")
        return false
    }
    console.log("这是读取的内容: ")
    console.log(data)
})


// 6. fs.readdir读取目录
fs.readdir("html",function(error,data){
    if(error){
        console.log(error)
        console.log("read directory failed")
        return false
    }
    console.log("这是读取文件夹的内容: ")
    console.log(data)
})


// 7. fs.rename 重命名
fs.rename("a.txt","b.txt",function(error){
    if(error){
        console.log(error)
        console.log("rename file failed")
        return false
    }
    console.log("rename file successfully")
})


// 8. fs.rmdir  删除目录
fs.rmdir("css",function(error){
    if(error){
        console.log(error)
        console.log("remove directory failed")
    }
    console.log("remove directory successfully")
})


// 9. fs.unlink删除文件
fs.unlink("a2.txt",function(error){
    if(error){
        console.log(error)
        console.log("delete file failed")
    }
    console.log("delete file successfully")
})


