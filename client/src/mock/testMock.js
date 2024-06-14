const Mock = require('mockjs');     //mockjs 导入依赖模块

let id = Mock.mock('@id');          // 得到随机的id，字符串

console.log(id, typeof id);

let obj = Mock.mock({
    id:'@id()', // 获得随机的id对象
    username: '@cname()',   // 随机生成中文名字
    date: '@date(yyyy/MM/dd)',    // 随机生成日期
    avatar: "@image('200*200','red','#fff','avatar')",  //  生成图片
    description: '@paragraph()',    // 描述
    ip:'@ip()', // ip 地址
    email:'@email()'    //email
})

console.log(obj);