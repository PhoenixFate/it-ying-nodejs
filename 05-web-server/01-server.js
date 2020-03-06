//引入http模块
const http = require('http');
//fs模块
const fs = require('fs');
const path = require("path")
const mime = require("./model/getmime.js")
const url = require("url")

http.createServer(function (req, res) {
    //http://localhost:8001/news.html    /news.html
    //http://localhost:8001/index.html    /index.html
    //css/dmb.bottom.css
    // var pathname = req.url;
    let pathname = url.parse(req.url).pathname


    if (pathname == '/') {
        pathname = '/index.html'; /*默认加载的首页*/
    }



    if (pathname != '/favicon.ico') {  /*过滤请求favicon.ico*/
        console.log(pathname);
        //文件操作获取 static下面的index.html
        fs.readFile('static/' + pathname, function (err, data) {
            if (err) {  /*么有这个文件*/
                console.log('404');
                fs.readFile('static/404.html', function (error2, data2) {
                    if (error2) {

                    } else {
                        res.writeHead(200, { "Content-Type": "text/html;charset='utf-8'" })
                        res.write(data2)
                        res.end()
                    }
                })


            } else { /*返回这个文件*/
                //获取文件后缀名
                let extname = path.extname(pathname)
                let contentType = mime.getMimeBetter(extname)
                // console.log(contentType)

                res.writeHead(200, { "Content-Type": contentType + ";charset='utf-8'" });
                res.write(data);
                res.end(); /*结束响应*/
            }
        })
    }

}).listen(8001);
console.log('Server running at http://127.0.0.1:8001/');
