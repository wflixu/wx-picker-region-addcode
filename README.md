# wx-picker-region-addcode


功能:微信小程序picker组件 地区选择后的数据添加上中国的行政区划代码。

微信小程序 picker-region 返回的地址是一个数组，如['陕西省','西安市','雁塔区']，这个数据太简单，和后台交互，需要省市区的区划代码。 包的作用是 =>[] => {}  输入微信小程序选择的地址数组，得到一个地址的详情信息对象，行政区划的数据参考这个：<a href="https://github.com/modood/Administrative-divisions-of-China">中华人民共和国行政区划代码</a>

考虑到需要用的都是中国人，说明还是中文吧，我这英文水平。。。

# 使用

```shell
# 使用
 npm install wx-picker-region-addcode -S
 const utils = require('wx-picker-region-addcode');

# test
 const mock =  ['陕西省', '西安市', '雁塔区'];
 const result = utils.addCode(mock);
# result => { province: '陕西省',
#   province_id: '610000',
#   city: '西安市',
#   city_id: '610100',
#   district: '雁塔区',
#   district_id: '610113',
#   address: '陕西省西安市雁塔区' } 
 

```

