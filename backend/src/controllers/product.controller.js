const { productService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const findAll = async (_req, res) => {
  const { status, data } = await productService.findAll();

  return res.status(mapStatusHTTP(status)).json(data);
};

const findById = async (req, res) => {
  const { productId } = req.params;
  const { status, data } = await productService.findById(productId);

  return res.status(mapStatusHTTP(status)).json(data);
};

const insert = async (req, res) => {
  const productData = req.body;
  const { status, data } = await productService.insert(productData);

  return res.status(mapStatusHTTP(status)).json(data);
};

const update = async (req, res) => {
  const productData = req.body;
  const { productId } = req.params;
  const { status, data } = await productService.update(productData, +productId);

  return res.status(mapStatusHTTP(status)).json(data);
};

const deleted = async (req, res) => {
  const { productId } = req.params;
  const { status, data } = await productService.deleted(+productId);

  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  findAll,
  findById,
  insert,
  update,
  deleted,
};