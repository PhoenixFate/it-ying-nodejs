/**
 * Created by Administrator on 2017/7/2 0002.
 */
exports.getMime=function(extname){  
    switch (extname){
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        default:
            return 'text/html';
    }
}
var fs=require("fs")
exports.getMimeBetter=function(extname){
    let data=fs.readFileSync("./model/mime.json")
    let mimes=JSON.parse(data.toString())
    return mimes[extname]||"text/html"
}