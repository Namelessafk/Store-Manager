const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { salesService } = require('../../../src/services');
const { salesController } = require('../../../src/controllers');
const { salesServiceSuccessful, allSales, salesServiceSuccessfulByID, salesById, salesServiceCreatedInsert, salesProductsPostedInvalid, returnSaleProducts } = require('../mocks/sales.mock');

describe('Realizando testes - SALES CONTROLLER:', function () {
  it('Testando função findAll do Controller', async function () {
    sinon.stub(salesService, 'findAll').resolves(salesServiceSuccessful);

    const req = {
      params: { },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await salesController.findAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allSales);
  });

  it('Testando função findById do Controller', async function () {
    sinon.stub(salesService, 'findById').resolves(salesServiceSuccessfulByID);

    const req = {
      params: { productId: 1 },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await salesController.findById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesById);
  });

  it('Testando função insert do Controller', async function () {
    sinon.stub(salesService, 'insert').resolves(salesServiceCreatedInsert);

    const req = {
      params: { },
      body: salesProductsPostedInvalid,
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await salesController.insert(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(returnSaleProducts);
  });
});