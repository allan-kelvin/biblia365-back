<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Estrutura do Projeto

biblia365-backend/
│
├── src/
│   ├── auth/
│   │   ├── auth.controller.ts         # Controlador de autenticação (login e registro)
│   │   ├── auth.module.ts             # Módulo de autenticação
│   │   ├── auth.service.ts            # Serviço de autenticação (login, cadastro)
│   │   ├── jwt.strategy.ts           # Estratégia de JWT
│   │   └── local.strategy.ts         # Estratégia de autenticação local
│   │
│   ├── user/
│   │   ├── user.controller.ts        # Controlador de usuários
│   │   ├── user.module.ts            # Módulo de usuários
│   │   ├── user.service.ts           # Serviço de usuários (CRUD)
│   │   ├── user.entity.ts            # Entidade de usuários
│   │   └── user.dto.ts               # Data Transfer Object (DTO) de usuário
│   │
│   ├── bible/
│   │   ├── bible.controller.ts       # Controlador para acessar a API da Bíblia
│   │   ├── bible.module.ts           # Módulo para a API da Bíblia
│   │   └── bible.service.ts          # Serviço que consulta a API da Bíblia
│   │
│   ├── app.controller.ts             # Controlador principal do NestJS
│   ├── app.module.ts                 # Módulo principal do NestJS
│   ├── app.service.ts                # Serviço principal do NestJS
│   └── main.ts                       # Arquivo de inicialização
│
├── .env                              # Arquivo de variáveis de ambiente (ex: JWT_SECRET)
├── ormconfig.json                    # Configuração do TypeORM (se usar banco de dados relacional)
├── package.json                      # Dependências e scripts do backend
├── tsconfig.json                     # Arquivo de configuração do TypeScript
└── tslint.json                       # Arquivo de configuração do TSLint

## Explicação de Algumas Pastas e Arquivos:

Back-end (NestJS)

auth/: Pasta que contém toda a parte de autenticação, como o controlador, serviço e estratégias de autenticação (JWT, local).
user/: Onde está o CRUD de usuários, contendo a entidade User, o serviço para manipulação dos dados dos usuários e o controlador para gerenciar os endpoints relacionados a usuários.
bible/: Contém o controlador e serviço para consultar a API da Bíblia e fornecer os dados dos livros, capítulos e versículos.
app.module.ts: Arquivo de configuração principal do NestJS onde todos os módulos são importados.

# Estrutura do Back-End (NestJS) para o Projeto Biblia365

Este documento descreve os passos para criar a estrutura de pastas e arquivos do back-end utilizando **NestJS** no projeto **Biblia365**.

## Passos para Criar a Estrutura de Pastas e Arquivos

### 1. Criar o Projeto NestJS

Primeiro, crie o projeto NestJS utilizando o comando abaixo:

```bash
nest new biblia365-backend
``` 

## Comandos install

# 1. Criar o projeto NestJS
nest new biblia365-backend

# 2. Criar módulo de autenticação
nest generate module auth
nest generate controller auth/auth
nest generate service auth/auth
touch src/auth/jwt.strategy.ts
touch src/auth/local.strategy.ts

# 3. Criar módulo de usuários
nest generate module user
nest generate controller user/user
nest generate service user/user
touch src/user/user.entity.ts
touch src/user/user.dto.ts

# 4. Criar módulo da Bíblia
nest generate module bible
nest generate controller bible/bible
nest generate service bible/bible

# 5. Instalar dependências (se necessário)
npm install @nestjs/jwt @nestjs/passport passport passport-local bcrypt
npm install @nestjs/typeorm typeorm mysql2
npm install dotenv
