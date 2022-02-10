const Sequelize = require('sequelize');

const Db = require('../config/config');

var { database, username, password, dialect, host, port } = Db.databaseDetails;

const sequelize = new Sequelize(database, username, password, {
    dialect: dialect,
    host: host,
    port: port
});

module.exports = sequelize;