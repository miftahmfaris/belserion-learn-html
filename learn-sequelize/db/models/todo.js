"use strict";
module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define(
        "Todo",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            todo: DataTypes.STRING,
            status: { type: DataTypes.BOOLEAN, defaultValue: false },
            userId: DataTypes.INTEGER
        },
        {}
    );
    Todo.associate = function(models) {
        // associations can be defined here
        Todo.belongsTo(models.User);
    };
    return Todo;
};
