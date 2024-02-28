const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');
const { allSales, salesById, salesProductsPosted } = require('../mocks/sales.mock');

describe('Realizando testes - SALES MODEL:', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Testando a função findAll da camada Model', async function () {
    sinon.stub(connection, 'execute')
      .resolves([allSales]);

    const response = await salesModel.findAll();

    expect(response).to.be.equal(allSales);
    expect(response).to.be.an('array');
  });

  it('Testando a função findById da camada Model', async function () {
    sinon.stub(connection, 'execute')
      .resolves([salesById]);
    const productId = 1;

    const response = await salesModel.findById(productId);

    expect(response).to.be.equal(salesById);
    expect(response).to.be.an('array');
  });

  it('Testando a função insert da camada Model', async function () {
    const insertId = 1;
    sinon.stub(connection, 'execute')
      .resolves([{ insertId }]);

    const response = await salesModel.insert(salesProductsPosted);

    expect(response).to.be.equal(1);
    expect(response).to.be.an('number');
  });
});