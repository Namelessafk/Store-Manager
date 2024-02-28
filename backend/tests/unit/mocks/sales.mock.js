const allSales = [
  {
    saleId: 1,
    date: '2024-02-23T13:49:49.000Z',
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: '2024-02-23T13:49:49.000Z',
    productId: 2,
    quantity: 10,
  },
];
  
const salesById = [
  {
    date: '2024-02-23T13:49:49.000Z',
    productId: 1,
    quantity: 5,
  },
  {
    date: '2024-02-23T13:49:49.000Z',
    productId: 2,
    quantity: 10,
  },
];
  
const salesServiceSuccessful = {
  status: 'SUCCESSFUL',
  data: allSales,
};
  
const salesServiceSuccessfulByID = {
  status: 'SUCCESSFUL',
  data: salesById,
};
  
const salesProductsInvalid = {
  status: 'NOT_FOUND',
  data: {
    message: 'Product not found',
  },
};
  
const salesProductsPosted = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 1,
    quantity: 1,
  },
];
  
const salesProductsPostedInvalid = [
  {
    productId: 99999,
    quantity: 1,
  },
  {
    productId: 99999,
    quantity: 1,
  },
];
  
const returnSaleProducts = {
  id: 3,
  itemsSold: [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 1,
      quantity: 1,
    },
  ],
};
  
const salesServiceCreatedInsert = {
  status: 'CREATED',
  data: returnSaleProducts,
};
  
module.exports = {
  allSales,
  salesById,
  salesServiceSuccessful,
  salesServiceSuccessfulByID,
  salesProductsPosted,
  returnSaleProducts,
  salesProductsPostedInvalid,
  salesProductsInvalid,
  salesServiceCreatedInsert,
};