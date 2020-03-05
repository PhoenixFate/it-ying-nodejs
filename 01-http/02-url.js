const url = require("url")
let api = "http://www.baidu.com?name=tom&age=20"

console.log(url.parse(api, true))
let getValue = url.parse(api, true).query
console.log(getValue)
let name = getValue.name
let age = getValue.age
console.log(typeof (getValue))
console.log(typeof (10))
console.log(name)
console.log(age)

