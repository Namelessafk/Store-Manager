const { productModel } = require('../models');

const findAll = async () => {
  const products = await productModel.findAll();
  return { status: 'SUCCESSFUL', data: products };
};

const findById = async (productId) => {
  const product = await productModel.findById(productId);

  if (!product) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };

  return { status: 'SUCCESSFUL', data: product };
};

const insert = async (productData) => {
  const productId = await productModel.insert(productData);
  const getProduct = await productModel.findById(productId);
  const newProduct = { id: productId, ...getProduct };

  return { status: 'CREATED', data: newProduct };
};

const update = async (productData, productId) => {
  const getAllProducts = await productModel.findAll();

  const valideProduct = getAllProducts.some((product) => product.id === +productId);

  if (!valideProduct) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }
  await productModel.update(productData, productId);

  return { status: 'SUCCESSFUL', data: { id: productId, name: productData.name } };
};

const deleted = async (productId) => {
  const getAllProducts = await productModel.findAll();

  const valideProduct = getAllProducts.some((product) => product.id === productId);

  if (!valideProduct) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }
  await productModel.deleted(productId);

  return { status: 'NOT_CONTENT', data: { } };
};

module.exports = {
  findAll,
  findById,
  insert,
  update,
  deleted,
};