const Sequelize = require('sequelize');
var db = require('./db');

const test1 = db.define('t_test1', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: "自增id"
    },
    pid: {
        type: Sequelize.STRING(50), //长度最大50的字符串
        defaultValue: "",
        comment: "商品自定义id"
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

test1.sync({
    force: true
});

module.exports = test1;