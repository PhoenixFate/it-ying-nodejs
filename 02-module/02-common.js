const axios1=require("./node_modules/axios/index.js")
console.log(axios1)
const axios2=require("axios/index")
console.log(axios2)
const axios3=require("axios")
console.log(axios3)

var db=require('db'); //默认会找node_modules/db/index.js 但db下面没有index.js，需要db下面配置package.json来设置对应关系
db.add();
