const express = require('express');
const route = express.Router();
const multers = require('multer');
const checkAuth = require('../middleware/check-auth');
const productController = require('../controller/product');

const storage = multers.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    },

});

const fileFilter = function(req, file, cb) {

    if (file.mimetypes === 'image/jpeg' || file.mimetypes === 'image/png') {
        cb(null, true); //accept it
    } else {
        cb(null, false); //reject it
    }
};

const upload = multers({
    storage: storage,
    // limits: {
    //     fileSize: 1024 * 1024 * 1024
    // },
    // fileFilter: fileFilter
});

route.get('/', checkAuth, productController.getAll);

route.post('/', checkAuth, upload.single('productImage'), productController.postProduct);

route.get('/:name', checkAuth, productController.getByName);

route.delete('/:name', checkAuth, productController.deleteProduct);

route.patch('/:name', checkAuth, productController.patchProduct);

module.exports = route;