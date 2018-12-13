'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class CloudineryMiddleware {
/**
* @param {object} ctx
* @param {Request} ctx.request
* @param {Function} next
*/
	async handle ({ request, response }, next) {

		if (!request.header('CLOUDINARY_CLOUD_NAME') || request.header('CLOUDINARY_CLOUD_NAME') == '') {
			return response.status(400).send({
				status: 400,
				message: "CLOUDINARY_CLOUD_NAME is not set"
			})
		}
		else if (!request.header('CLOUDINARY_API_KEY') || request.header('CLOUDINARY_API_KEY') == '') {
			return response.status(400).send({
				status: 400,
				message: "CLOUDINARY_API_KEY is not set"
			})
		}
		else if (!request.header('CLOUDINARY_API_SECRET') || request.header('CLOUDINARY_API_SECRET') == '') {
			return response.status(400).send({
				status: 400,
				message: "CLOUDINARY_API_SECRET is not set"
			})
		}
		
		await next()
	}
}

module.exports = CloudineryMiddleware
