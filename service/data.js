var fs = require("fs");
// var settings = require("../settings.js");

//获取首页列表
exports.getAllbooklist = function () {
    // 读取文件
    var text= fs.readFileSync('./data/DieNao.json','utf-8');
    return JSON.parse(text) ;
}

exports.getIistimg = function (obj) {
    var bookid =obj.id;
    var booklist=getAllbooklist();

    

    
     

}

   





