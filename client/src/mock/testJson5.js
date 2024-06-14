const fs = require('fs')
const path = require('path')
const JSON5 = require('json5')

var json = fs.readFileSync(path.join(__dirname,'./userInfo.json5'), 'utf-8');
var obj = JSON5.parse(json);
let newObj = Mock.mock(obj);

console.log(newObj);