# Boas-vindas ao repositório do projeto Store Manager
<details>
<summary>🧑‍💻 O que deverá ser desenvolvido</summary>

- Você vai desenvolver uma API RESTful utilizando a arquitetura em camadas!

- A API a ser construída é um sistema de gerenciamento de vendas em que será possível criar, visualizar, deletar e atualizar produtos e vendas. Você deverá utilizar o banco de dados MySQL para a gestão de dados.

- Você também irá desenvolver testes para garantir as funcionalidade das implementações, uma habilidade essencial para a pessoa desenvolvedora.

</details>
  
<details>
  <summary>📝 Habilidades a serem trabalhadas </summary>

Neste projeto, verificamos se você é capaz de:

- Interagir com um banco de dados relacional MySQL;
- Implementar uma API utilizando arquitetura em camadas;
- Criar validações para os dados recebidos pela API;
- Escrever testes para APIs para garantir a implementação dos endpoints;

</details>

<details>
<summary>🐳 Iniciando a aplicação no Docker Compose</summary>

```bash
# Instale as dependências
npm install

# Inicie os containers do compose `backend` e `db`
# A aplicação estará disponível em `http://localhost:3001` em modo de desenvolvimento
docker-compose up -d

# É possível ver os logs da aplicação com `docker logs -n 10 -f <nome-do-container>`
docker logs -n 10 -f store_manager
```

</details>

<details>
<summary>🖥️ Iniciando a aplicação localmente</summary>

> ⚠️ Atenção: Ao rodar localmente, a aplicação deverá receber variáveis de ambiente como exemplificado em [`env.example`](./env.example) para poder se comunicar com o serviço de banco de dados.

```bash
# Instale as dependências
npm install

# Inicie apenas o serviço `db` no compose
docker-compose up -d db

# Inicie a aplicação em modo de desenvolvimento
npm run dev:local
```

</details>

<details>
<summary>🛠 Desenvolvendo a aplicação e rodando testes</summary>
#### Comandos dos testes com mocha
npm run test:mocha     # roda os testes do mocha
npm run test:coverage  # roda os testes e mostra a cobertura geral
npm run test:mutation  # roda os testes e mostra a cobertura de mutações
```

</details>
