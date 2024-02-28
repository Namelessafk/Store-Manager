const validateSalesRequired = (req, res, next) => {
  const saleData = req.body;
  const valideProductIdRequired = saleData
    .every((sale) => sale.productId != null && sale.productId !== '');
  const valideQuantityRequired = saleData
    .every((sale) => sale.quantity != null && sale.quantity !== '');
  
  if (!valideProductIdRequired) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  
  if (!valideQuantityRequired) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  return next();
};
  
const validateQuantityValue = (req, res, next) => {
  const saleData = req.body;
  const valideQuantity = saleData.every((sale) => sale.quantity >= 1);
  
  if (!valideQuantity) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  
  return next();
};
  
module.exports = {
  validateSalesRequired,
  validateQuantityValue,
};