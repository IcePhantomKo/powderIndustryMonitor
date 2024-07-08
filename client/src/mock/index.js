const fs = require('fs');
const path = require('path');
const Mock = require('mockjs');
const JSON5 = require('json5');

// 读取json文件
function getJsonFile(filePath){
    var json = fs.readFileSync(path.resolve(__dirname,filePath),'utf-8');
    //解析并返回
    return JSON5.parse(json);
}

// 返回一个函数
module.exports = function(app){
    if(process.env.MOCK == 'true'){
        // 监听http请求
        app.app.get('/user/userinfo',function(rep,res){
            var json = getJsonFile('./userInfo.json5');
            // 将json传入Mock.mock方法中，生成的数据返回给浏览器
            res.json(Mock.mock(json));
        })
        app.app.get('/manage/riskMgt',function(rep,res){
            var json = getJsonFile('./mockData/riskData.json5');
            // 将json传入Mock.mock方法中，生成的数据返回给浏览器
            res.json(Mock.mock(json));
        })
    }
}