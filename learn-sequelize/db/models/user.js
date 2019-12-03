"use strict";
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING
        },
        {}
    );
    User.associate = function(models) {
        // associations can be defined here
        User.hasOne(models.Todo)
    };
    return User;
};
