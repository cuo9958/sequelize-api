const db = require("./demo/db");

const User = require("./demo/t_user");
const Product = require("./demo/t_product");
const ProductInfo = require("./demo/t_product_info");
const test1 = require("./demo/t_test1");
const test2 = require("./demo/t_test2");

console.log("建立模型", User);
console.log("建立带索引的模型", Product);
console.log("加载测试模型", ProductInfo);

//测试正常加载的主外键
// test1.hasMany(test2, {
//     foreignKey: "pid",
//     sourceKey: "pid",
// });
// test2.belongsTo(test1, {
//     foreignKey: "pid",
//     targetKey:"pid"
// });
// test1.sync({
//     force: true
// });
// test2.sync({
//     force: true
// });

// setTimeout(() => {
//     //测试查询
//     test1.findAll({
//         include: [{
//             model: test2,
//         }]
//     })
// }, 1000);

//测试导入的主外键ƒ
// let models = {};
// console.log("添加带外键模型");
// const List = db.import("./demo/t_list");
// console.log("加载测试模型");
// const Item = db.import("./demo/t_item");
// models.List = List;
// models.Item = Item;
// models.List.associate(models);
// models.Item.associate(models);

// setTimeout(() => {
//     //测试查询
//     models.List.findAll({
//         include: [{
//             model: models.Item,
//         }]
//     })
// }, 1000);
