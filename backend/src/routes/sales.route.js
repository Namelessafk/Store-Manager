const { Router } = require('express');
const { salesController } = require('../controllers');
const { 
  validateQuantityValue,
  validateSalesRequired } = require('../middlewares/validateSalesPost');

const route = Router();

route.get('/', salesController.findAll);
route.get('/:salesId', salesController.findById);
route.post('/', validateSalesRequired, validateQuantityValue, salesController.insert);

module.exports = route;