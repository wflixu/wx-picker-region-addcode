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
  const db = require('./data.js/index.js');
  let curCollection = [];

  //查找省代码
  for (let i = 0; i < db.length; i++) {
    // console.log(db[i].name)
    if (arr[0] == db[i].name) {
      res.province_id = db[i].code + '0000';
      curCollection = db[i].children;
      break;
    }
  }

 //直辖市判断
 if(arr[0]==arr[1]){
  res.city_id = curCollection[0].code + '00';
  curCollection = curCollection[0].children;
 } else{
   //查找市
  for (let j = 0; j < curCollection.length; j++) {
    if (arr[1] == curCollection[j].name) {
      res.city_id = curCollection[j].code + '00';
      curCollection = curCollection[j].children;
      break;
    }
  }
 }
  

  //查找区县
  for (let k = 0; k < curCollection.length; k++) {
    if (arr[2] == curCollection[k].name) {
      res.district_id = curCollection[k].code;
      break;
    }
  }
  res.address += arr[0];
  res.address += arr[0]==arr[1]?'':arr[1];
  res.address += arr[2];
  return res;

  //
}

module.exports = {
  addCode: addCode
};
