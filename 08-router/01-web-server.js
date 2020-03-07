//引入http模块
const http = require('http')
//引入扩展名的方法是在文件里面获取到的。
const staticRouter = require('./model/staticRouter.js')
const router = require('./model/router.js')
const url = require("url")

const ejs = require("ejs")
const fs = require("fs")


http.createServer(function (req, res) {
	let pathname = url.parse(req.url).pathname
	//console.log(pathname)
	res.writeHead(200, { "Content-Type": "text/html;charset='utf-8'" });
	if (pathname == "/login") {
		router['login'](req,res)
		return
	} else if (pathname == '/doLogin') {
		router['doLogin'](req,res)
		return
	} else if (pathname == "/register") {
		res.end("register")
		return
	}
	staticRouter.statics(req, res, 'static');

}).listen(8001);
console.log('Server running at http://127.0.0.1:8001/');
