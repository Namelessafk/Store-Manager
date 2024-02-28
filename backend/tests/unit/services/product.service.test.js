const { expect } = require('chai');
const sinon = require('sinon');
const { allProducts, onlyProduct, productPostedBody, productPosted } = require('../mocks/product.mock');
const { productModel } = require('../../../src/models');
const { productService } = require('../../../src/services');

describe('Realizando testes - PRODUCT SERVICE:', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Testando a função findAll da camada Service', async function () {
    sinon.stub(productModel, 'findAll').resolves(allProducts);

    const responseService = await productService.findAll();

    expect(responseService.status).to.equal('SUCCESSFUL');
    expect(responseService.data).to.deep.equal(allProducts);
  });

  it('Testando a função findById da camada Service', async function () {
    sinon.stub(productModel, 'findById').resolves(onlyProduct);

    const productId = 1;

    const responseService = await productService.findById(productId);

    expect(responseService.status).to.equal('SUCCESSFUL');
    expect(responseService.data).to.deep.equal(onlyProduct);
  });

  it('Testando a função findById quando o Id não é encontrado', async function () {
    sinon.stub(productModel, 'findById').resolves(undefined);

    const productId = 99;

    const responseService = await productService.findById(productId);

    expect(responseService.status).to.equal('NOT_FOUND');
    expect(responseService.data).to.deep.equal({ message: 'Product not found' });
  });

  it('Testando a função insert da camada Service', async function () {
    const insertId = 1;
    sinon.stub(productModel, 'insert').resolves(insertId);

    const responseService = await productService.insert(productPostedBody);

    expect(responseService.status).to.equal('CREATED');
    expect(responseService.data).to.deep.equal(productPosted);
  });
});