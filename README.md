# Aplicação de Gerenciamento de Livros
Esta é uma aplicação de gerenciamento de livros que oferece uma API RESTful para listar, buscar, cadastrar, editar e remover livros. A aplicação utiliza o framework Express e a biblioteca Sequelize como ORM (Object-Relational Mapping) para interagir com o banco de dados MySQL.

## Funcionalidades
A aplicação oferece as seguintes funcionalidades:

- Listar todos os livros cadastrados.
- Buscar um livro pelo seu ID.
- Cadastrar um novo livro com título, autor e quantidade de páginas.
- Editar as informações de um livro existente.
- Remover um livro do sistema.
## Configuração do Projeto
Para configurar e executar o projeto, siga os passos abaixo:

1. Clone o repositório para o seu ambiente local.
2. Navegue até o diretório raiz do projeto.
3. Execute o comando npm install para instalar as dependências necessárias.
4. Configure as informações de acesso ao banco de dados no arquivo config/config.js.
5. Execute o comando npx sequelize-cli db:migrate para criar a tabela de livros no banco de dados.
6. Inicie o servidor com o comando npm start.
## Utilização da API
A API possui os seguintes endpoints:

- `GET /books`: Retorna a lista de todos os livros cadastrados.
- `GET /books`/:id: Retorna as informações de um livro específico com base no seu ID.
- `POST /books`: Cadastra um novo livro no sistema.
- `PUT /books/:id`: Atualiza as informações de um livro existente com base no seu ID.
- `DELETE /books/:id`: Remove um livro do sistema com base no seu ID.
## Estrutura do Projeto
O projeto segue uma estrutura de arquivos organizada da seguinte maneira:

- `index.js`: Arquivo principal que inicia o servidor Express e define as rotas da API.
- `config/config.js`: Arquivo de configuração do banco de dados.
models/Book.js: Definição do modelo do livro utilizando o Sequelize.
- `services/BooksService.js`: Implementação dos serviços relacionados aos livros.
- `controllers/BooksController.js`: Implementação dos controladores para cada rota da API.
## Contribuição
Sinta-se à vontade para contribuir com melhorias e novas funcionalidades para este projeto. Caso encontre algum problema ou bug, abra uma issue no repositório.