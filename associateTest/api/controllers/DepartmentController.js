/**
 * DepartmentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    resetPassword: async function(req, res) {
        try {
            sails.log.info('UserController.resetPassword called...');
            // let sad = await Department.create({
            //     dept_name: 'asdi2',
            //     dept_created_date: '2022-02-17'
            // }).fetch();
            let data = await Department.find({}).populateAll();

            // let sad = await Employee.create({
            //     id: 4,
            //     emp_name: 'yashwan3223t',
            //     join_date: '1098-02-13',
            //     end_date: '1233-01-16',
            //     dept_no: 2
            // }).fetch();

            return res.ok({
                data: data,
                message: req.i18n.__('USER_NOT_FOUND'),
                errorCode: '',
                error: '',
            });

        } catch (err) {

            return res.serverError({
                data: {},
                message: err,
                errorCode: '',
                error: err,
            });
        }
    },
};