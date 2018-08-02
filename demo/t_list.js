module.exports = function (sequelize, DataTypes) {

    const list = sequelize.define('t_list', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            comment: "自增id"
        },
        pid: {
            type: DataTypes.INTEGER, //长度最大50的字符串
            defaultValue: 0,
            comment: "自定义id",
        },
        title: {
            type: DataTypes.STRING(50), //长度最大50的字符串
            defaultValue: "",
            comment: "商品标题"
        },

    }, {
        freezeTableName: true,
        indexes: [{
            unique: true,
            fields: ['pid']
        }]
    });

    list.associate = function (models) {
        //设置外键,默认生成外键id
        list.hasMany(models.Item, {
            foreignKey: "pid",
            sourceKey: "pid",
            constraints: false //不同步建立外键关系
        });

    }

    list.sync({
        force: true
    });

    return list;
}