const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productService } = require('../../../src/services');
const { productController } = require('../../../src/controllers');
const { 
  productServiceStatus, 
  allProducts,
  productServiceStatusById,
  onlyProduct,
  productServiceSuccessfulInsert,
  productPosted } = require('../mocks/product.mock');

describe('Realizando testes - PRODUCT CONTROLLER:', function () {
  it('Testando função findAll do Controller', async function () {
    sinon.stub(productService, 'findAll').resolves(productServiceStatus);

    const req = {
      params: { },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.findAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProducts);
  });

  it('Testando função findById do Controller', async function () {
    sinon.stub(productService, 'findById').resolves(productServiceStatusById);

    const req = {
      params: { productId: 1 },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.findById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(onlyProduct);
  });

  it('Testando função insert do Controller', async function () {
    sinon.stub(productService, 'insert').resolves(productServiceSuccessfulInsert);

    const req = {
      params: { },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.insert(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(productPosted);
  });
});