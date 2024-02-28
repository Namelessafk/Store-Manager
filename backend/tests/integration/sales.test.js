const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

const { expect } = chai;
chai.use(chaiHttp);

describe('Realizando testes para a rota /products', function () {
  it('Testando se ao tentar cadastrar uma venda sem o campo productId é retornado um erro', async function () {
    const productData = [
      {
        '': 1,
        quantity: 1,
      },
    ];

    const response = await chai.request(app)
      .post('/sales')
      .send(productData);

    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.an('object');
    expect(response.body.message).to.be.equal('"productId" is required');
  });

  it('Testando se ao tentar cadastrar uma venda sem o campo quantity é retornado um erro', async function () {
    const productData = [
      {
        productId: 1,
      },
    ];

    const response = await chai.request(app)
      .post('/sales')
      .send(productData);

    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.an('object');
    expect(response.body.message).to.be.equal('"quantity" is required');
  });

  it('Testando se ao tentar cadastrar uma venda com a quantity menor ou igual a 0 é retornado um erro', async function () {
    const productData = [
      {
        productId: 1,
        quantity: 0,
      },
    ];

    const response = await chai.request(app)
      .post('/sales')
      .send(productData);

    expect(response.status).to.be.equal(422);
    expect(response.body).to.be.an('object');
    expect(response.body.message).to.be.equal('"quantity" must be greater than or equal to 1');
  });

  it('Testando se é possível cadastrar uma venda com sucesso', async function () {
    const productData = [
      {
        productId: 1,
        quantity: 1,
      },
    ];

    const response = await chai.request(app)
      .post('/sales')
      .send(productData);

    console.log(response.body);

    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.an('object');
  });
});