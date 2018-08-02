const Sequelize = require('sequelize');
var db = require('./db');

const users = db.define('t_user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,       //主键
        autoIncrement: true,    //自增
        comment: "自增id"       //注释:只在代码中有效
    },
    //用户名
    username: {
        type: Sequelize.STRING
    },
    //密码
    pwd: {
        type: Sequelize.STRING
    },
    //状态
    status: {
        type: Sequelize.INTEGER
    },
    //昵称
    nickname: {
        type: Sequelize.STRING
    },
    //token
    token: {
        type: Sequelize.UUID
    },
    create_time: {
        type: Sequelize.BIGINT
    }
}, {
    //使用自定义表名
    freezeTableName: true,
    //去掉默认的添加时间和更新时间
    timestamps: false,
});
//同步:没有就新建,有就不变
// users.sync();
//先删除后同步
users.sync({
    force: true
});

module.exports = users;