
// const utils = require('wx-picker-region-addcode');
const utils = require('../lib/index.js');

console.log("测试开始\n");
console.log('输入')
const mock =  ['北京市', '北京市', '东城区'];
console.log(mock)
console.log('结果')
console.log(utils.addCode(mock));


console.log('*****************************************************************')
const mock1 =  ['天津市', '天津市', '蓟州区'];
console.log(mock1)
console.log('结果')
console.log(utils.addCode(mock1));


console.log('*****************************************************************')
const mock2 =  ['新疆维吾尔自治区', '自治区直辖县级行政区划', '阿拉尔市'];
console.log(mock2)
console.log('结果')
console.log(utils.addCode(mock2));