/**
 * https://www.npmjs.com/package/md5
 * 
 * npm install md5 --save
 * 
 * 最新的npm 默认--save
 * 
 */

const md5=require("md5")
console.log(md5('123456'))

/**
 * https://www.npmjs.com/package/silly-datetime
 * npm i silly-datetime --save
 */
var sd = require('silly-datetime');
console.log(new Date())
let date1=sd.format(new Date(), 'YYYY-MM-DD HH:mm');
// 2015-07-06 15:10
console.log(date1)
 
let date2=sd.fromNow(+new Date() - 2000);
// a few seconds ago
console.log(date2)