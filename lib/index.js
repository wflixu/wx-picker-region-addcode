"use strict";
function addCode(arr) {
    //   var arr = ['陕西省', '西安市', '雁塔区'];
    if (arr.length !== 3) {
        console.warn("你必须输入长度3的字符串数组，如： ['陕西省', '西安市', '雁塔区']");
        return null;
    }
    var res = {
        province: arr[0],
        province_id: "-1",
        city: arr[1],
        city_id: "-1",
        district: arr[2],
        district_id: "-1",
        address: ""
    };
    var db = require("./data");
    var curCollection = [];
    // 查找省代码
    for (var i = 0; i < db.length; i++) {
        if (arr[0] === db[i].name) {
            res.province_id = db[i].code + "0000";
            curCollection = db[i].children;
            break;
        }
    }
    // 直辖市判断
    if (arr[0] === arr[1]) {
        res.city_id = curCollection[0].code + "00";
        curCollection = curCollection[0].children;
    }
    else {
        // 查找市
        for (var j = 0; j < curCollection.length; j++) {
            if (arr[1] === curCollection[j].name) {
                res.city_id = curCollection[j].code + "00";
                curCollection = curCollection[j].children;
                break;
            }
        }
    }
    // 查找区县
    for (var k = 0; k < curCollection.length; k++) {
        if (arr[2] === curCollection[k].name) {
            res.district_id = curCollection[k].code;
            break;
        }
    }
    res.address += arr[0];
    res.address += arr[0] === arr[1] ? "" : arr[1];
    res.address += arr[2];
    return res;
}
module.exports = addCode;
