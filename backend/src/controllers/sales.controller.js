const { salesService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const findAll = async (_req, res) => {
  const { status, data } = await salesService.findAll();

  return res.status(mapStatusHTTP(status)).json(data);
};

const findById = async (req, res) => {
  const { salesId } = req.params;
  const { status, data } = await salesService.findById(salesId);

  return res.status(mapStatusHTTP(status)).json(data);
};

const insert = async (req, res) => {
  const salesData = req.body;
  const { status, data } = await salesService.insert(salesData);

  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  findAll,
  findById,
  insert,
};