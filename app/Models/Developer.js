'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const DeveloperFilter = use('App/ModelFilters/DeveloperFilter')

class Developer extends Model {
  static boot() {
    super.boot()
    this.addTrait('@provider:Filterable', DeveloperFilter)
  }
}

module.exports = Developer
