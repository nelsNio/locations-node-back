const Sequelize = require('sequelize');
/**
 * Conection
 * 'database', 'username', 'password'
 */
const sequelize = new Sequelize(process.env.DB, process.env.USERNAME, process.env.PASSWORD, {
    host: process.env.URL_DB,
    dialect: 'postgres',
});



module.exports = sequelize;