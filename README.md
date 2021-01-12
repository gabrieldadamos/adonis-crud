# Adonis CRUD - Ligue

API desenvolvida o especialmente para o processo seletivo. 

## Setup

Para iniciar a aplicação, é necessário configurar o arquivo .env com o usuário do banco de dados. Após isso, rodar as migrations com o seguinte comando:

```bash
adonis migration:run
```

## Testes unitários

Para iniciar os testes unitários, é necessário que configurar o arquivo .env.testing com um banco de dados limpo. Após isso, rodar os testes com o seguinte comando:

```bash
adonis test
```

## Endpoints

<strong>Faz a listagem de todos os desenvolvedores</strong>
```bash
GET /developers
```

<strong>Faz o filtro dos desenvolvedores (com todos os atributos do banco de dados) com paginação utlizando ?page=</strong>
```bash
GET /developers?nome=Gabriel
```

<strong>Faz o a busca de um desenvolvedor por ID</strong>
```bash
GET /developers/{id}
```

<strong>Adiciona um novo desenvolvedor</strong>
```bash
POST /developers
```
JSON Esperado nessa requisição através do body:
```bash
{
    "nome": "User Test",
    "sexo": "M",
    "idade": 30,
    "hobby": "Game",
    "datanascimento": "1999-10-05"
  }
```

<strong>Edita um desenvolvedor existente</strong>
```bash
PUT /developers/{id}
```

<strong>Deleta um desenvolvedor existente</strong>
```bash
DELETE /developers/{id}
```
