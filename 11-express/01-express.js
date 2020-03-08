const express=require("express")

//实例化express
var app=new express()

//express中使用ejs只需要安装ejs，不需要引入，因为express默认集成了ejsa
//但需要配置ejs模板引擎
app.set("view engine","ejs")


app.get("/",function(request,response){
    response.send("你好 express")
})

app.get("/news",(request,response)=>{
    response.send("news")
})

//动态路由
// http://127.0.0.1:9001/content/21
app.get("/content/:aid",(request,response)=>{
    //获取动态路由的传值
    console.log(request.params)
    response.send("hello: "+request.params.aid)
})

//获取get传值
// http://127.0.0.1:9001/product?name=abc
app.get("/product",(request,response)=>{
    console.log(request.query)
    response.send("this is product module, you name is: "+request.query.name)
})


//在express中使用ejs
//默认会在当前路径的views下面找模板

//也可以改变默认views路径
// app.set("views",__dirname+"/statics")

app.get("/index",(request,response)=>{
    let list=['news1','news2','news3']

    response.render("index",{
        news_list:list
    })
})

//中间件app.use
//使用express配置静态资源路径
//默认是public路径
app.use(express.static("public"))
//配置虚拟目录的静态资源路径
// app.use('/static',express.static("public"))



app.listen(9001,"127.0.0.1")
console.log('Server running at http://127.0.0.1:9001/');
