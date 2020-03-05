var obj = {
    get: function () {
        console.log("从服务器获得数据")
    },
    post: function () {
        console.log("发送数据给服务器")
    }
}

// exports.request = obj
module.exports = obj