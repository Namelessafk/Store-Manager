const connection = require('./connection');

const findAll = async () => {
  const [sales] = await connection.execute(`
    SELECT 
      SP.sale_id AS saleId,
      SA.date,
      SP.product_id AS productId,
      SP.quantity
    FROM sales AS SA
    INNER JOIN sales_products AS SP
      ON SA.id = SP.sale_id
    ORDER BY SP.sale_id, SP.product_id;
  `);

  return sales;
};

const findById = async (salesId) => {
  const [sales] = await connection.execute(`
  SELECT 
    SA.date,
    SP.product_id AS productId,
    SP.quantity
  FROM sales AS SA
  INNER JOIN sales_products AS SP
    ON SA.id = SP.sale_id
  WHERE SA.id = ?
  ORDER BY SP.sale_id, SP.product_id;
  `, [salesId]);

  return sales;
};

const insertDate = async () => {
  const query = 'INSERT INTO sales (date) VALUES (NOW());';
  const [{ insertId }] = await connection.execute(query);

  return insertId;
};

const insertDataProducts = async (saleId, saleData) => {
  const query = `
  INSERT INTO
    sales_products
  (sale_id, product_id, quantity) VALUES (?, ?, ?);`;

  const registerProducts = saleData
    .map(({ productId, quantity }) => connection.execute(query, [saleId, productId, quantity]));

  Promise.all([registerProducts]);

  return saleId;
};

const insert = async (salesData) => {
  const insertId = await insertDate();
  await insertDataProducts(insertId, salesData);

  return insertId;
};

module.exports = {
  findAll,
  findById,
  insert,
};