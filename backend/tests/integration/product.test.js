const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

const { expect } = chai;
chai.use(chaiHttp);

describe('Realizando testes para a rota /products', function () {
  it('Testando se ao tentar cadastrar um produto sem os campos retorna um erro', async function () {
    const productData = {};

    const response = await chai.request(app)
      .post('/products')
      .send(productData);

    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.an('object');
  });

  it('Testando se ao tentar cadastrar um produto com menos de 5 caracteres retorna um erro', async function () {
    const productData = {
      name: 'Test',
    };

    const response = await chai.request(app)
      .post('/products')
      .send(productData);

    expect(response.status).to.be.equal(422);
    expect(response.body).to.be.an('object');
  });
});