const Sequelize = require('sequelize');
var db = require('./db');

const product = db.define('t_product', {
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
    indexes: [
        //普通索引,默认BTREE
        {
            unique: true,
            fields: ['pid']
        },
        // 名称为jsonb_path_ops,类型为gin
        // {
        //     fields: ['data'],
        //     using: 'gin',
        //     operator: 'jsonb_path_ops'
        // },
        // 默认名称是 [table]_[fields]
        // 多个字段的索引
        // {
        //     name: 'public_by_author',
        //     fields: ['author', 'status'],
        //     where: {
        //         status: 'public'
        //     }
        // },
        // 复杂索引
        // {
        //     name: 'title_index',
        //     method: 'BTREE',
        //     fields: ['author', {
        //         attribute: 'title',
        //         collate: 'en_US',
        //         order: 'DESC',
        //         length: 5
        //     }]
        // }
    ]
});

product.sync({
    force: true
});

module.exports = product;