'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('productos','ProductoController.index') //muestra todos los productos All()
Route.get('productos/:id','ProductoController.show') //muestra un producto find() -> id
Route.get('productos/crear','ProductoController.create') //crea un producto save()
Route.post('productos/crear','ProductoController.store') //crea un producto save()
Route.get('productos/editar/:id','ProductoController.edit') //edita un product save() -> id
Route.post('productos/editar/:id','ProductoController.update') //edita un product save() -> id
Route.get('productos/eliminar/:id','ProductoController.destroy') //eliminar un producto delete() -> id

Route.get('proveedor','ProveedorController.index') //muestra todos los productos All()
Route.get('proveedor/:id','ProveedorController.show') //muestra un producto find() -> id
Route.get('proveedor/crear','ProveedorController.create') //crea un producto save()
Route.post('proveedor/crear','ProveedorController.store') //crea un producto save()
Route.get('proveedor/editar/:id','ProveedorController.edit') //edita un product save() -> id
Route.post('proveedor/editar/:id','ProveedorController.update') //edita un product save() -> id
Route.get('proveedor/eliminar/:id','ProveedorController.destroy') //eliminar un producto delete() -> id

Route.get('marcas','MarcaController.index') //muestra todos los productos All()
Route.get('marcas/:id','MarcaController.show') //muestra un producto find() -> id
Route.get('marcas/crear','MarcaController.create') //crea un producto save()
Route.post('marcas/crear','MarcaController.store') //crea un producto save()
Route.get('marcas/editar/:id','MarcaController.edit') //edita un product save() -> id
Route.post('marcas/editar/:id','MarcaController.update') //edita un product save() -> id
Route.get('marcas/eliminar/:id','MarcaController.destroy') //eliminar un producto delete() -> id
