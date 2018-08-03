const Sequelize = require('sequelize');
const db = require('./db');

const test2 = db.define('t_test2', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: "自增id"
    },
    pid: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment: "商品id"
    },
    title: {
        type: Sequelize.STRING(50), //长度最大50的字符串
        defaultValue: "",
        comment: "商品标题"
    },
    image: {
        type: Sequelize.STRING,
        defaultValue: "http://www.guofangchao.com/logo.png", //默认值
        comment: "图片"
    }
}, {
    freezeTableName: true,
});


// test2.sync({
//     force: true
// });

module.exports = test2;