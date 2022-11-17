databaseDetails = {
    database: 'course_management',
    username: 'root',
    password: 'zt31',
    dialect: 'mysql',
    host: "127.0.0.1",
    port: "3306"
}

Message = {
    add: 'Added Successfully',
    upd: 'Updated Successfully',
    del: 'Are you sure you want to delete this?'
}

module.exports = {
    databaseDetails: databaseDetails,
    message: Message
}