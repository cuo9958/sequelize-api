module.exports = function (sequelize, DataTypes) {

    const item = sequelize.define('t_item', {
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

    });

    item.associate = function (models) {
        //设置外键,默认生成外键id
        item.belongsTo(models.List, {
            foreignKey: "pid",
            targetKey: "pid",
            constraints: false //不同步建立外键关系
        });
    }

    item.sync({
        force: true
    });

    return item;
}