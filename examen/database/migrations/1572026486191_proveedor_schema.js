'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProveedorSchema extends Schema {
  up () {
    this.create('proveedor', (table) => {
      table.increments()
      table.string('nombre',50).notNullable()
      table.string('direccion',50).unique()
      table.string('telefono',50).unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('proveedor')
  }
}

module.exports = ProveedorSchema
