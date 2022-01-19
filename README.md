# LabLuby-Crud

### Features

- [x] Cadastro de funcionario - Rota (post): urlbase/employees
- [x] Update de funcionario - Rota (put): urlbase/employees:id
- [x] Listagem de funcionarios - Rota (get): urlbase/employees
- [x] Remocao de funcionario - Rota (delete): urlbase/employees/:id
- [x] Autenticacao de funcionario - Rota (post): urlbase/login
- [x] Upload avatar de funcionario - Rota (patch): urlbase/employees/avatar
- [x] Listar funcionarios por Id- Rota(get): urlbase/employees/:id de carro

- [x] Criar carro - Rota (post): urlbase/vehicles
- [x] Listar todos carros - Rota (get): urlbase/vehicles
- [x] Mostrar Carro - Rota (get): urlbase/vehicles/:id
- [x] Remover Carro - Rota (delete): urlbase/vehicles/:id

- [x] Vender carro - Rota (post): urlbase/store/sell
- [x] Reservar carro - Rota (post): urlbase/store/reserve
- [x] Listar Store - Rota (get): urlbase/store
- [x] Mostrar Carros de funcionario- Rota (get): urlbase/store/:id

Ps: As rotas estao todas disponiveis para utilizacao com o app Insomnia (https://insomnia.rest/) na pasta Insomnia.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/) e [Docker](https://www.docker.com/) com Docker Composer.
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/

#Instalar as dependencias com yarn
$ yarn install

#No docker, utilizar o comando
$ docker-compose up -d

#O banco de dados postgres inicializara na porta 5432.
# O servidor inciará na porta:4444 - acesse <http://localhost:4444>
```

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [TSyringe](https://github.com/microsoft/tsyringe)
- [Postgres](hhttps://www.postgresql.org/)
- [TypeORM](https://www.postgresql.org/)
- [Express](https://expressjs.com/)
- [JsonWebToken](https://jwt.io/)
- [BcryptJs](https://www.npmjs.com/package/bcryptjs)
- [Class-Validator](https://github.com/typestack/class-validator)
- [Multer](https://www.npmjs.com/package/multer)

## Teste de Algoritmos

Esta localizado na pasta Teste_Algoritmos, rodar utilizando node Algoritmos.js

## Author

Eduardo Pedó Gutkoski - eduardo.pedogutkoski@gmail.com