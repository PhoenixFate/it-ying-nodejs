const url = require("url")

const ejs = require("ejs")
const fs = require("fs")

var app={

    login:function(req,res){
        //显示登录页面
		//把数据库的数据渲染到模板引擎上面
		let msg = "要渲染的数据"
		let list = ['1111', '2222', '3333']
		let h2 = '<h2>这是一个h2数据</h2>'
		ejs.renderFile('views/login.ejs', { msg: msg, list: list, h2: h2 }, function (error, data) {
			res.end(data)
		})
    },

    doLogin:function(req,res){
        //post中获得数据
		req.on("data", function (chunk) {
			console.log("---")
			console.log(chunk.toString())
			fs.appendFile("login.txt",chunk.toString()+"\n",function(error){
				if(error){
                    
				}else {
					
				}
			})
			console.log("---")
		})
		res.end("do login")
    },

    register:function(req,res){

    }

}

module.exports=app