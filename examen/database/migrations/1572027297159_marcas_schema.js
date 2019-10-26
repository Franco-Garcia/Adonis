'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MarcasSchema extends Schema {
  up () {
    this.create('marcas', (table) => {
      table.increments()
      table.string('nombre',50).notNullable()
      table.integer('proveedor_id').unsigned().references('id').inTable('proveedor')
      table.integer('productos_id').unsigned().references('id').inTable('productos')
      table.timestamps()
    })
  }

  down () {
    this.drop('marcas')
  }
}

module.exports = MarcasSchema
