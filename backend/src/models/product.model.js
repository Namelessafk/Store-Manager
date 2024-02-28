const { 
  getFormattedColumnNames, 
  getFormattedPlaceholders, 
  getFormattedUpdateColumns } = require('../utils/generateFormattedQuery');
const connection = require('./connection');
  
const findAll = async () => {
  const [products] = await connection.execute(`
      SELECT * FROM products;
    `);
  
  return products;
};
  
const findById = async (productId) => {
  const [[product]] = await connection.execute(`
      SELECT * FROM products WHERE id = ?
    `, [productId]);
  
  return product;
};
  
const insert = async (productData) => {
  const columns = getFormattedColumnNames(productData);
  const placeholders = getFormattedPlaceholders(productData);
  const query = `INSERT INTO products (${columns}) VALUE (${placeholders});`;
  
  const [{ insertId }] = await connection.execute(query, [...Object.values(productData)]);
  
  return insertId;
};
  
const update = async (productData, productId) => {
  const columns = getFormattedUpdateColumns(productData);
  const query = `UPDATE products SET ${columns} WHERE id = ?`;
  const updateProduct = connection.execute(query, [...Object.values(productData), productId]);
  
  return Promise.all([updateProduct]);
};
  
const deleted = async (productId) => {
  const query = 'DELETE FROM products WHERE id = ?';
  await connection.execute(query, [productId]);
};
  
module.exports = {
  findAll,
  findById,
  insert,
  update,
  deleted,
};