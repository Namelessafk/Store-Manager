const allProducts = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do CapitÃ£o AmÃ©rica',
  },
];
  
const onlyProduct = {
  id: 1,
  name: 'Martelo de Thor',
};
  
const productServiceStatus = {
  status: 'SUCCESSFUL',
  data: allProducts,
};
  
const productServiceStatusById = {
  status: 'SUCCESSFUL',
  data: onlyProduct,
};
  
const productServiceStatusByIdNotFound = {
  status: 'NOT_FOUND',
  data: {
    message: 'Product not found',
  },
};
  
const productPostedBody = {
  name: 'ProdutoX',
};
  
const productPosted = {
  id: 1,
  name: 'Martelo de Thor',
};
  
const productServiceSuccessfulInsert = {
  status: 'CREATED',
  data: productPosted,
};
  
const withoutNameProduct = {
  status: 'NOT_FOUND',
  data: {
    message: '"name" is required',
  },
};
  
module.exports = {
  allProducts,
  onlyProduct,
  productServiceStatus,
  productServiceStatusById,
  productServiceStatusByIdNotFound,
  productPosted,
  productPostedBody,
  productServiceSuccessfulInsert,
  withoutNameProduct,
};