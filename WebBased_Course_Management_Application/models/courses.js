const Sequelize = require('sequelize');
const sequelize = require('../models/database');

const Courses = sequelize.define('courses', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    duration: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fees: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Courses;