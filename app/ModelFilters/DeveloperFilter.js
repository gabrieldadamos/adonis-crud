'use strict'

const ModelFilter = use('ModelFilter')

class DeveloperFilter extends ModelFilter {
  nome(nome) {
    return this.where('nome', 'LIKE', `%${nome}%`)
  }

  sexo(sexo) {
    return this.where('sexo', +sexo)
  }

  idade(idade) {
    return this.where('idade', +idade)
  }

  hobby(hobby) {
    return this.where('hobby', 'LIKE', `%${hobby}%`)
  }

  dataNascimento(dataNascimento) {
    return this.where('datanascimento', +dataNascimento)
  }
}

module.exports = DeveloperFilter
