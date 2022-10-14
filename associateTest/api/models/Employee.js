/**
 * Employee.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        dept_no: {
            model: 'Department',
            unique: true
        },
        id: {
            type: 'number',
            allowNull: false,
            required: true
        },
        emp_name: {
            type: 'string',
            allowNull: false
        },
        join_date: {
            type: 'string',
            columnType: 'date',
            allowNull: false
        },
        end_date: {
            type: 'string',
            columnType: 'date',
            allowNull: false
        }

    },

};