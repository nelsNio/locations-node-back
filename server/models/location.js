const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/database');
const locationModel = {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    areaM2: {
        type: DataTypes.NUMBER,
        allowNull: false
    }
    /*,
        location: {
            type: DataTypes.INTEGER,
            allowNull: true
        }*/
};



module.exports = sequelize.define('Location', locationModel);