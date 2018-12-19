'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class MailMiddleware {
/**
* @param {object} ctx
* @param {Request} ctx.request
* @param {Function} next
*/
	async handle ({ request, response }, next) {

        if (!request.header('MAIL_USERNAME') || request.header('MAIL_USERNAME') == '') {
            return response.status(400).send({
                status: 400,
                message: "MAIL_USERNAME is not set"
            })
        }
        else if (!request.header('MAIL_PASSWORD') || request.header('MAIL_PASSWORD') == '') {
            return response.status(400).send({
                status: 400,
                message: "MAIL_PASSWORD is not set"
            })
        }
        else if (!request.header('MAIL_PORT') || request.header('MAIL_PORT') == '') {
            return response.status(400).send({
                status: 400,
                message: "MAIL_PORT is not set"
            })
        }
		else if (!request.header('MAIL_HOST') || request.header('MAIL_HOST') == '') {
			return response.status(400).send({
				status: 400,
				message: "MAIL_HOST is not set"
			})
		}

		await next()
	}
}

module.exports = MailMiddleware
