const Sequelize = require('sequelize');
const db = require('./db');

const product_info = db.define('t_product_info', {
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


product_info.sync({
    force: true
});

module.exports = product_info;