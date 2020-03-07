var G = {}

var app = function (req, res) {
    console.log("app-" + req)

    if(G['login']){
        G['login'](req,res)
    }
    if(G['register']){
        G['register'](req,res)
    }

}
// 定义get方法
app.get = function (string, callback) {

    console.log("inner app get")
    G[string] = callback
}

app.post = function () {
    console.log("app post")
}

//执行get方法
app.get('login',function(){
    console.log("outline app get login")
})
app.get('register',function(){
    console.log("outline app get register")
})
app('test')
app('test')

