'use strict'

const Marca = use('App/Models/Marca');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with marcas
 */
class MarcaController {
  /**
   * Show a list of all marcas.
   * GET marcas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let marca = await Marca.all();
    return view.render('marcas/index',{marca: marca.rows});
  }

  /**
   * Render a form to be used for creating a new marca.
   * GET marcas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    return view.render('marcas/crear')
  }

  /**
   * Create/save a new marca.
   * POST marcas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const marca = new Marca();
    marca.nombre = request.input('nombre');
    marca.proveedor_id = request.input('proveedor_id');
    marca.productos_id = request.input('productos_id');
    await marca.save();
    return response.redirect("/marcas");
  }

  /**
   * Display a single marca.
   * GET marcas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const marca = await Marca.find(params.id);
    return view.render('marca/crear',{marca:marca});
  }

  /**
   * Render a form to update an existing marca.
   * GET marcas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let marca = await Marca.find(params.id);
    return view.render('marcas/editar',{marca})
  }

  /**
   * Update marca details.
   * PUT or PATCH marcas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let marca = await Marca.find(params.id);
    marca.nombre = request.input('nombre');
    marca.proveedor_id = request.input('proveedor_id');
    marca.productos_id = request.input('productos_id');
    await marca.save();
    return response.redirect("/marcas");
  }

  /**
   * Delete a marca with id.
   * DELETE marcas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const marca = await Marca.find(params.id);
    await marca.delete();
    return response.redirect('/marcas');
  }
}

module.exports = MarcaController
