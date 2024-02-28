const { Router } = require('express');
const { productController } = require('../controllers');
const { validateNameProduct } = require('../middlewares/validateNameProduct');

const route = Router();

route.get('/', productController.findAll);
route.get('/:productId', productController.findById);
route.post('/', validateNameProduct, productController.insert);
route.put('/:productId', validateNameProduct, productController.update);
route.delete('/:productId', productController.deleted);

module.exports = route;