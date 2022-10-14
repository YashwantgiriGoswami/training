/**
 * Department.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        // id: {
        //     type: 'number',
        //     allowNull: false,
        //     required: true,

        //         // collection: 'Employee',
        //         // via: 'dept_no'
        // },
        dept_name: {
            type: 'string',
            allowNull: false
        },
        dept_created_date: {
            type: 'string',
            columnType: 'date',
            allowNull: false
        },
        details: {
            collection: 'Employee',
            via: 'dept_no'
        }
    },
};