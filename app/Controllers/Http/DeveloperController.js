'use strict'

const Developer = use('App/Models/Developer')

class DeveloperController {

  async index({
    request,
    response
  }) {

    //Verifica se existe algum query param, se existir usa o Adonis Lucid Filter 
    if (Object.keys(request.get()).length !== 0) {
      const query = request.all()
      const page = query.page || 1

      const filterDeveloper = await Developer.query()
        .filter(query)
        .paginate(page, 15)
      console.log(filterDeveloper)

      if (filterDeveloper.rows.length === 0) {
        response.status(404)
          .send({
            message: 'Nenhum desenvolvedor encontrado'
          })
      }

      return filterDeveloper
    }

    const allDevelopers = Developer.all()

    return allDevelopers
  }

  async show({
    params,
    response
  }) {
    const findDeveloper = await Developer.findOrFail(params.id).catch(() => {
      response.status(404)
        .send({
          message: 'Nenhum desenvolvedor encontrado'
        })
    })

    return findDeveloper
  }

  async store({
    request,
    response
  }) {
    const requestData = request.only(['nome', 'sexo', 'idade', 'hobby', 'datanascimento'])

    await Developer.create(requestData)

    return response.status(201)
      .send({
        message: 'Desenvolvedor criado com sucesso'
      })
  }

  async update({
    request,
    params,
    response
  }) {
    const findDeveloper = await Developer.findOrFail(params.id)

    const dataRequest = request.only(['nome', 'sexo', 'idade', 'hobby', 'datanascimento'])

    findDeveloper.merge(dataRequest)

    await findDeveloper.save()

    return response.status(200)
      .send({
        message: 'Desenvolvedor atualizado com sucesso'
      })
  }

  async destroy({
    params,
    response
  }) {
    const removeDeveloper = await Developer.findOrFail(params.id)

    await removeDeveloper.delete()

    return response.status(204)
      .send({
        message: 'Desenvolvedor removido com sucesso'
      })
  }
}

module.exports = DeveloperController
