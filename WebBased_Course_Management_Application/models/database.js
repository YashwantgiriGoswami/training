const Sequelize = require('sequelize');

const sequelize = new Sequelize("yashwantgirig", "yashwantgirig", "S5rhADhukD2s5u6mXbpVY5vSpvFjSnvD", {
    dialect: "mysql",
    host: "15.206.7.200",
    port: "3310"
});

module.exports = sequelize;