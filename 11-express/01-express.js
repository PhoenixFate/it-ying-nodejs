const express = require("express")

//设置cookie
const cookieParser = require("cookie-parser")

//实例化express
var app = new express()

//设置cookie中间件
//加密的盐
app.use(cookieParser('keySigned'))



//设置session中间件
var session = require('express-session')
app.use(session({
    secret: 'keyboard cat',// 作为服务器生成session 的签名  
    name: 'session_id', //保存在本地cookie的一个名字，默认connect.id
    resave: false, //强制保存session，即使没有变化，默认 true，建议设置false
    saveUninitialized: true, //默认true，强制将未初始化的session存储
    cookie: { maxAge:1000000, secure: false } //secure true 只在https下面保存cookie
}))



//express中使用ejs只需要安装ejs，不需要引入，因为express默认集成了ejsa
//但需要配置ejs模板引擎
app.set("view engine", "ejs")

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
const bodyParser = require("body-parser")
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/login", function (request, response) {
    response.render("login")
})

app.post('/doLogin', function (request, response) {
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
app.use(function (request, response, next) {
    console.log(new Date())
    //默认匹配到路由之后不向下匹配
    //使路由继续向下匹配
    next()
})

//匹配指定路由
app.use('/temp', function (request, response, next) {
    console.log("temp 应用级别中间件")
    //默认匹配到路由之后不向下匹配
    //使路由继续向下匹配
    next()
})


/**
 * 路由级中间件
 */
app.get("/temp", function (request, response, next) {
    console.log("temp 路由中间件")
    next()
})

app.get("/temp", function (request, response) {
    response.send("temp 最终响应数据")
})


app.get("/", function (request, response) {
    response.send("你好 express")
})

app.get("/news", (request, response) => {
    response.send("news")
})

//动态路由
// http://127.0.0.1:9001/content/21
app.get("/content/:aid", (request, response) => {
    //获取动态路由的传值
    console.log(request.params)
    response.send("hello: " + request.params.aid)
})

//获取get传值
// http://127.0.0.1:9001/product?name=abc
app.get("/product", (request, response) => {
    console.log(request.query)
    response.send("this is product module, you name is: " + request.query.name)
})


//在express中使用ejs
//默认会在当前路径的views下面找模板

//也可以改变默认views路径
// app.set("views",__dirname+"/statics")

app.get("/index", (request, response) => {
    let list = ['news1', 'news2', 'news3']

    response.render("index", {
        news_list: list
    })
})






app.get("/setCookie", function (req, res) {
    //httpOnly:true  通过程序（js脚本、applet等）无法获取cookie信息，防止XSS攻击
    //domain:'.phoenix.com'  多个二级域名共享域名、 例如www.phoenix.com news.phoenix.com 默认不共享
    //path:'/news' 设置只在某具体但子目录下面才能狗访问cookie
    res.cookie("username", "tom", { maxAge: 60000, httpOnly: true })

    res.cookie("password", "123456", { expires: new Date(Date.now() + 900000), httpOnly: true })

    res.send("你好 已经成功设置cookie")
})


app.get("/getCookie", function (req, res) {
    console.log(req.cookies)
    res.send("获取cookie:  " + req.cookies.username)
})


app.get("/setCookieSigned", function (req, res) {
    //保存的时候加密
    //需要设置加密的key
    // app.use(cookieParser('keySigned'))
    res.cookie("nameSigned", "tomcat", { maxAge: 600000, signed: true, httpOnly: true })
    res.send("设置加密的cookie 成功")
})

app.get("/getCookieSigned", function (req, res) {
    res.send("获取加密的cookie: " + req.signedCookies.nameSigned)
})






app.get("/setSession",function(req,res){
    req.session.userInfo="zhangsan"
    res.send("设置session 成功")
})

app.get("/getSession",function(req,res){
    if(req.session.userInfo){
        res.send("您好 "+req.session.userInfo +" 欢迎回来")
    }
    res.send("请先访问/setSesion")
})


app.get("/deleteSession",function(req,res){
    req.session.cookie.maxAge=0
    res.send("销毁session 成功")
})


app.get("/deleteSession2",function(req,res){
    req.session.destroy(function(error){

    })
    res.send("销毁session2 成功")
})



//上面的路由都没有匹配到，则返回404
app.use(function (request, response) {
    response.status(404).send("没有匹配到页面，返回404")
})









app.listen(9001, "127.0.0.1")
console.log('Server running at http://127.0.0.1:9001/');
