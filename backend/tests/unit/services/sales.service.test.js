const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services');
const { allSales, salesById, returnSaleProducts, salesProductsPosted, salesProductsPostedInvalid, salesProductsInvalid } = require('../mocks/sales.mock');

describe('Realizando testes - SALES SERVICE:', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Testando a função findAll da camada Service', async function () {
    sinon.stub(salesModel, 'findAll').resolves(allSales);

    const responseService = await salesService.findAll();

    expect(responseService.status).to.equal('SUCCESSFUL');
    expect(responseService.data).to.deep.equal(allSales);
  });

  it('Testando a função findById da camada Service', async function () {
    sinon.stub(salesModel, 'findById').resolves(salesById);

    const productId = 1;

    const responseService = await salesService.findById(productId);

    expect(responseService.status).to.equal('SUCCESSFUL');
    expect(responseService.data).to.deep.equal(salesById);
  });

  it('Testando a função findById quando o Id não é encontrado', async function () {
    sinon.stub(salesModel, 'findById').resolves([]);

    const productId = 99;

    const responseService = await salesService.findById(productId);

    expect(responseService.status).to.equal('NOT_FOUND');
    expect(responseService.data).to.deep.equal({ message: 'Sale not found' });
  });

  it('Testando a função insert quando uma venda é cadastrada com sucesso', async function () {
    sinon.stub(salesModel, 'insert').resolves(returnSaleProducts);

    const responseService = await salesService.insert(salesProductsPosted);

    expect(responseService.status).to.equal('CREATED');
    expect(responseService.data).to.be.an('object');
    expect(responseService.data.itemsSold).to.be.equal(salesProductsPosted);
  });

  it('Testando a função insert quando uma venda é cadastrada com o id do produto inválido', async function () {
    sinon.stub(salesModel, 'insert').resolves(salesProductsInvalid);

    const responseService = await salesService.insert(salesProductsPostedInvalid);

    expect(responseService.status).to.equal('NOT_FOUND');
    expect(responseService.data.message).to.be.equal('Product not found');
    expect(responseService.data).to.be.an('object');
  });
});