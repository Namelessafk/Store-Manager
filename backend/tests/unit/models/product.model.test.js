const { expect } = require('chai');
const sinon = require('sinon');
const { productModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');
const { allProducts, onlyProduct, productPosted } = require('../mocks/product.mock');

describe('Realizando testes - PRODUCT MODEL:', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Testando a função findAll da camada Model', async function () {
    sinon.stub(connection, 'execute')
      .resolves([allProducts]);

    const response = await productModel.findAll();

    expect(response).to.be.equal(allProducts);
    expect(response).to.be.an('array');
  });

  it('Testando a função findById da camada Model', async function () {
    sinon.stub(connection, 'execute')
      .resolves([[onlyProduct]]);
    const productId = 1;

    const response = await productModel.findById(productId);

    expect(response).to.be.equal(onlyProduct);
    expect(response).to.be.an('object');
  });

  it('Testando a função insert da camada Model', async function () {
    const insertId = 1;
    sinon.stub(connection, 'execute')
      .resolves([{ insertId }]);
    const productData = {
      name: 'ProductX',
    };

    const response = await productModel.insert(productData);

    expect(response).to.be.equal(productPosted.id);
  });
});