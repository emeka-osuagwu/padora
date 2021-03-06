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
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
	return { greeting: 'Welcome to pandora box' }
})

Route.group(() => {
  Route.post("/image/upload", "CloudineryController.imageUpload");
  Route.post("/blob/upload", "CloudineryController.blobUpload");
}).prefix("api/v1/service/cloudinery").middleware(['cloudinery'])

Route.group(() => {
	Route.post("/", "MailController.send");
}).prefix("api/v1/service/mail").middleware(['mail'])


