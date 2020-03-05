function formatApi(api) {
    return "https://www.baidu.com/" + api
}

//通过exports暴露方法
// module.exports=formatApi
exports.formatApi = formatApi
