const express=require("express")

//实例化express
var app=new express()

//express中使用ejs只需要安装ejs，不需要引入，因为express默认集成了ejsa
//但需要配置ejs模板引擎
app.set("view engine","ejs")

//中间件app.use
//express内置中间件
//使用express配置静态资源路径
//默认是public路径
app.use(express.static("public"))
//配置虚拟目录的静态资源路径
// app.use('/static',express.static("public"))




/**
 * body-parser 中间件 第三方的 获取post提交的数据
 * 1.cnpm install body-parser --save
 * 2.var bodyParser=require('body-parser')
 * 3.设置中间件
 */
const bodyParser=require("body-parser")
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get("/login",function(request,response){
    response.render("login")
})

app.post('/doLogin',function(request,response){
    //获取post提交的数据
    //4.request.body获取post提交的数据
    console.log(request.body)
    response.send("登陆成功")
})


/**
 * node中间件
 * 应用级中间件
 */
//匹配任意路径
app.use(function(request,response,next){
    console.log(new Date())
    //默认匹配到路由之后不向下匹配
    //使路由继续向下匹配
    next()
})

//匹配指定路由
app.use('/temp',function(request,response,next){
    console.log("temp 应用级别中间件")
    //默认匹配到路由之后不向下匹配
    //使路由继续向下匹配
    next()
})


/**
 * 路由级中间件
 */
app.get("/temp",function(request,response,next){
    console.log("temp 路由中间件")
    next()
})

app.get("/temp",function(request,response){
    response.send("temp 最终响应数据")
})


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



//上面的路由都没有匹配到，则返回404
app.use(function(request,response){
    response.status(404).send("没有匹配到页面，返回404")
})



app.listen(9001,"127.0.0.1")
console.log('Server running at http://127.0.0.1:9001/');
