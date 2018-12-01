'use strict'

class UserController {
	
	async index({request, response}){
		return response.send({
			data: 200
		})
	}

}

module.exports = UserController
