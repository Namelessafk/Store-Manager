const { salesModel, productModel } = require('../models');

const findAll = async () => {
  const allSales = await salesModel.findAll();
  return { status: 'SUCCESSFUL', data: allSales };
};

const findById = async (salesId) => {
  const allSalesById = await salesModel.findById(salesId);

  if (allSalesById.length <= 0) return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };

  return { status: 'SUCCESSFUL', data: allSalesById };
};

const insert = async (salesData) => {
  const getAllProducts = await productModel.findAll();

  const getIdProduct = salesData.map((sale) => {
    const valideProduct = getAllProducts.some((product) => product.id === sale.productId);
    return valideProduct;
  });

  const allProductsIdValid = getIdProduct.every((productId) => productId);

  if (!allProductsIdValid) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }

  const salesProductsId = await salesModel.insert(salesData);

  return { status: 'CREATED', data: { id: salesProductsId, itemsSold: salesData } };
};

module.exports = {
  findAll,
  findById,
  insert,
};