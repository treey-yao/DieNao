var fs = require("fs");
// var settings = require("../settings.js");

//获取首页列表
exports.getAllbooklist = function () {
    // 读取文件
    var text = fs.readFileSync('./data/DieNao.json', 'utf-8');
    return JSON.parse(text);
}

//阅读器的列表数据
exports.getIistimg = function (obj) {
    var bookid = obj.id;
    var imgNames = fs.readdirSync("./data/book/" + bookid);
    imgNames= imgNames.map(function (i) {
         return "book/"+ bookid+"/"+  i
    });
    return imgNames;
}

//章节名称
exports.chapterTilte = function (obj) {
    var bookid = obj.id;
    var text = fs.readFileSync('./data/DieNao.json', 'utf-8');
    text= JSON.parse(text)
    var tilte =containsid(text.catalog, bookid);
    return tilte;
}

//查询名称
function containsid(arr, obj) {  
    var i = arr.length;  
    while (i--) {  
        if (arr[i].id === obj) {  
            return arr[i].name;  
        }  
    }  
    return false;  
}








