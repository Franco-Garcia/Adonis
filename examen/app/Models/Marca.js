'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Marca extends Model {
    static get table(){
        return 'marcas'
    }
}

module.exports = Marca
