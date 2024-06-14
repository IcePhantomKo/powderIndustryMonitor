const Mock = require('mockjs')

let data = Mock.mock({
    id:'@id()', // 获得随机的id对象
    username: '@cname()',   // 随机生成中文名字
    date: '@date(yyyy/MM/dd)',    // 随机生成日期
    avatar: "@image('200*200','red','#fff','avatar')",  //  生成图片
    description: '@paragraph()',    // 描述
    ip:'@ip()', // ip 地址
    email:'@email()'    //email
})

module.exports = function(app){
    if(process.env.MOCK == 'true'){
        // node express 框架
        // 参数1: 接口地址; 参数2: 服务器处理函数
        app.app.use('/api/userinfo', (req,res) => {
            // 将模拟的数据转成json格式返回给浏览器
            res.json(data)
        })
    }
}