'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DevelopersSchema extends Schema {
  up () {
    this.create('developers', (table) => {
      table.increments()
      table.string('nome').notNullable(),
      table.enu('sexo', ['M', 'F']).notNullable(),
      table.integer('idade').notNullable(),
      table.string('hobby').notNullable(),
      table.date('datanascimento').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('developers')
  }
}

module.exports = DevelopersSchema
