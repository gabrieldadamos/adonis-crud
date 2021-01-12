'use strict'

const {
  test,
  trait
} = use('Test/Suite')('Developer CRUD')

const Developer = use('App/Models/Developer')

trait('Test/ApiClient')

test('create developer', async ({
  client,
  assert
}) => {
  const response = await client.post('/developers').send({
    "nome": "User Test",
    "sexo": "M",
    "idade": 30,
    "hobby": "Game",
    "datanascimento": "1999-10-05"
  }).end()

  response.assertStatus(201)

  const findDeveloper = await Developer.find(1)

  assert.equal(findDeveloper.toJSON().nome, 'User Test')
})

test('edit developer', async ({
  client,
  assert
}) => {
  const response = await client.put('/developers/1').send({
    "nome": "User Test",
    "sexo": "F",
    "idade": 36,
    "hobby": "Game",
    "datanascimento": "1999-10-05"
  }).end()

  response.assertStatus(200)

  const findDeveloper = await Developer.find(1)

  assert.equal(findDeveloper.toJSON().idade, 36)
  assert.equal(findDeveloper.toJSON().sexo, 'F')
})

test('list developer', async ({
  client,
  assert
}) => {
  const response = await client.get('/developers/1').end()

  response.assertStatus(200)

  assert.equal(response.body.nome, 'User Test')
})


test('remove developers', async ({
  client
}) => {
  const response = await client.delete('/developers/1').end()

  response.assertStatus(204)

})
