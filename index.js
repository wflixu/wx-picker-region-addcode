const db = require('./data.js');
function addCode(arr) {
//   var arr = ['陕西省', '西安市', '雁塔区'];
  const res = {
    province: arr[0],
    province_id: -1,
    city: arr[1],
    city_id: -1,
    district: arr[2],
    district_id: -1,
    address: ''
  };
   
  for (let i = 0; i < db.length; i++) {
    // console.log(db[i].name)
    if (arr[0] == db[i].name) {
      res.province_id = db[i].code + '0000';
    }
    for (let j = 0; j < db[i].children.length; j++) {
        // console.log(db[i].children[j].name)
      if (arr[1] == db[i].children[j].name) {
        res.city_id = db[i].children[j].code + '00';
      }
      for (let k = 0; k < db[i].children[j].children.length; k++) {
        // console.log(db[i].children[j].children[k].name);
        if (arr[2] == db[i].children[j].children[k].name) {
            res.district_id = db[i].children[j].children[k].code;
            break;
          }
      }
    }
  }
  res.address = arr[0]+arr[1]+arr[2];
  return res;

  //
}

module.exports = {
  addCode: addCode
};
