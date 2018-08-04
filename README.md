# sequelize-api
Sequelize的api示例,这里展示几个API的使用方法

demo文件夹展示常用的写法

test.js是常用方法的调用

[教程地址](https://gitbook.cn/gitchat/activity/5b654bd25f339e0e067338ec)

## API

### 安装

`npm install --save mysql2`

`npm install --save sequelize`
### 初始化

- new Sequelize("表名","用户名","密码",{})
```javascript
const sequelize = new Sequelize('database', 'username', 'password',  {
  host: 'localhost',    //数据库地址,默认本机
  dialect: 'mysql'|'sqlite'|'postgres'|'mssql', //数据库类型
  pool: {   //连接池设置
    max: 5, //最大连接数
    min: 0, //最小连接数
    idle: 10000
  },
  // SQLite的保存地址
  storage: '/data/database.sqlite'

```
### 数据类型

```javascript
 STRING() - 变长字符串
 CHAR() - 定长字符串
 TEXT() - 指定为文本列
 INTEGER() - 整型
 BIGINT() - 长整型
 FLOAT() - 浮点数
 REAL() - 浮点数
 DOUBLE() - 双精度浮点数
 DECIMAL() - 小数
 BOOLEAN() - 布尔
 TIME() - 时间类型
 DATE() - 日期时间类型
 DATEONLY() - 日期类型
 HSTORE() - 键/值类型
 JSON() - JSON字符串类型
 JSONB() - JSONB类型
 NOW() - 时间默认值
 BLOB() - 二进制类型
 RANGE() - Range类型
 UUID() - UUID类型
 UUIDV1() - UUID v1 默认值
 UUIDV4() - UUID v4 默认值
 VIRTUAL() - 虚拟值
 ENUM() - 枚举
 ARRAY() - 数组
 GEOMETRY() - 几何类型
 GEOGRAPHY() - 地理类型
```

### 字段验证方式

```javascript
validate:{
    is: ["^[a-z]+$",'i'],     // 全匹配字母
    is: /^[a-z]+$/i,          // 全匹配字母，用规则表达式写法
    not: ["[a-z]",'i'],       // 不能包含字母
    isEmail: true,            // 检查邮件格式
    isUrl: true,              // 是否是合法网址
    isIP: true,               // 是否是合法IP地址
    isIPv4: true,             // 是否是合法IPv4地址
    isIPv6: true,             // 是否是合法IPv6地址
    isAlpha: true,            // 是否是字母
    isAlphanumeric: true,     // 是否是数字和字母
    isNumeric: true,          // 只允许数字
    isInt: true,              // 只允许整数
    isFloat: true,            // 是否是浮点数
    isDecimal: true,          // 是否是十进制书
    isLowercase: true,        // 是否是小写
    isUppercase: true,        // 是否大写
    notNull: true,            // 不允许为null
    isNull: true,             // 是否是null
    notEmpty: true,           // 不允许为空
    equals: 'specific value', // 等于某些值
    contains: 'foo',          // 包含某些字符
    notIn: [['foo', 'bar']],  // 不在列表中
    isIn: [['foo', 'bar']],   // 在列表中
    notContains: 'bar',       // 不包含
    len: [2,10],              // 长度范围
    isUUID: 4,                // 是否是合法 uuids
    isDate: true,             // 是否是有效日期
    isAfter: "2011-11-05",    // 是否晚于某个日期
    isBefore: "2011-11-05",   // 是否早于某个日期
    max: 23,                  // 最大值
    min: 23,                  // 最小值
    isArray: true,            // 是否是数组
    isCreditCard: true,       // 是否是有效信用卡号
    // 自定义规则
    isEven: function(value) {
    if(parseInt(value) % 2 != 0) {
        throw new Error('请输入偶数!')
    }
}
```

### 查询条件

``` javascript
$and: {a: 5}           // AND 连接: (a = 5)
$or: [{a: 5}, {a: 6}]  // OR 或者(a = 5 OR a = 6)
$gt: 6,                // 大于 id > 6
$gte: 6,               // 大于等于 id >= 6
$lt: 10,               // 小于 id < 10
$lte: 10,              // 小于等于 id <= 10
$ne: 20,               // 不等于 id != 20
$between: [6, 10],     // 中间值 BETWEEN 6 AND 10
$notBetween: [11, 15], // 中间值排除 NOT BETWEEN 11 AND 15
$in: [1, 2],           // 单值数组 IN [1, 2]
$notIn: [1, 2],        // 不在数组中 NOT IN [1, 2]
$like: '%hat',         // 模糊匹配 LIKE '%hat'
$notLike: '%hat'       // 模糊匹配的反向 NOT LIKE '%hat'
$iLike: '%hat'         // PG的模糊 ILIKE '%hat' (case insensitive)  (PG only)
$notILike: '%hat'      // PG的迷糊反向 NOT ILIKE '%hat'  (PG only)
$overlap: [1, 2]       // PG的操作 && [1, 2] (PG array overlap operator)
$contains: [1, 2]      // PG的操作 @> [1, 2] (PG array contains operator)
$contained: [1, 2]     // PG的操作 <@ [1, 2] (PG array contained by operator)
$any: [2,3]            // PG的操作 ANY ARRAY[2, 3]::INTEGER (PG only)
```
### 查询方法参数opts

```javascript
Model.findAll({
  where: {          //条件判断
    attr0: 5,       //等值判断
    attr1: {
      $gt: 50       //条件比较
    },
  },
  attributes:["attr1"], //返回的字段
  order:["id","desc"],  //排序
  limit:10,             //返回个数,分页用到
  offset:0,             //起始位置,分页用到
  paranoid:false,       //是否返回虚拟删除的记录
  include:[{            //多表查询使用到的另外一个表
      model:model,      //表对象
      as:"asl",         //别名
      where:{},         //条件
      attributes:[],    //返回的属性
  }],  
  logging:false,        //日志,用于打印     
})
```
### 查询多条 findAll(opts) 或者 all(opts)

### 通过id查询  findById(id,opts)

### 查询一条记录   findOne(opts)

### 统计查询个数    count(opts)

### 分页查询    findAndCount(opts) 或者 findAndCountAll

### 指定字段查询最大值  max("id",opts)

### 指定字段查询最小值  min("id",opts)

### 求和    sum("id",opts)

### 添加新数据  create(model,opts)

### 查询,不存在就返回默认对象   findOrInitialize(opts)

opts.default    默认值对象

### 查询,不存在就新建一个   findOrCreate(opts)

### 查询,不存在就添加一个   findCreateFind(opts)

### 有则更新,无则添加   upsert(model,opts)  或者 insertOrUpdate(model,opts)

根据主键或者唯一约束键匹配

### 批量添加    bulkCreate([model],opts)

### 更新记录    update(model,opts)

### 删除记录    destroy(opts)

### 恢复记录    restore(opts)

恢复多个实例，当启用paranoid时

### 查表结构的信息  describe()

### 递增  increment("id",{by:1})

## 递减     decrement("id",{by:1})

## 联查

```

```