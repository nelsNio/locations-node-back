const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/database');


const locationModel = sequelize.define('Location', {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    areaM2: {
        type: DataTypes.NUMBER,
        allowNull: false
    }
});

locationModel.belongsTo(locationModel);


module.exports = locationModel;