const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(" ")[1];
        const decode = jwt.verify(token, "yashwant");
        req.userData = decode
        next();
    } catch (error) {
        res.status(404).json({
            msg: "not loged in"
        })
    }
};