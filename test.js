
const utils = require('wx-picker-region-addcode');
console.log("测试开始\n");
console.log('输入')
const mock =  ['陕西省', '西安市', '雁塔区'];
console.log(mock)
console.log('结果')
console.log(utils.addCode(mock));