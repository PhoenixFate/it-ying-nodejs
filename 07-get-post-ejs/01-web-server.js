//引入http模块
var http = require('http');
//引入扩展名的方法是在文件里面获取到的。
var router = require('./model/staticRouter.js');
const url = require("url")

const ejs = require("ejs")
const fs = require("fs")


http.createServer(function (req, res) {
	let pathname = url.parse(req.url).pathname
	//console.log(pathname)
	res.writeHead(200, { "Content-Type": "text/html;charset='utf-8'" });
	if (pathname == "/login") {
		//显示登录页面
		//把数据库的数据渲染到模板引擎上面
		let msg = "要渲染的数据"
		let list = ['1111', '2222', '3333']
		let h2 = '<h2>这是一个h2数据</h2>'
		ejs.renderFile('views/login.ejs', { msg: msg, list: list, h2: h2 }, function (error, data) {
			res.end(data)
		})
		return
	} else if (pathname == '/doLogin') {
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
		return
	} else if (pathname == "/register") {
		res.end("register")
		return
	}
	router.statics(req, res, 'static');

}).listen(8001);
console.log('Server running at http://127.0.0.1:8001/');
