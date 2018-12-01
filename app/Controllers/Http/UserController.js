'use strict'

/*
|--------------------------------------------------------------------------
| Services Namespaces
|--------------------------------------------------------------------------
*/
const CloudineryService = use("App/Services/CloudineryService");

class UserController {




	async index({request, response}){

		const file = request.file('file')

		const userService = new CloudineryService('arm', '169264285654842', 'M_8S1mNBX_Q4s8KCUrCJDk4wI0g');

		return response.send({
			data: await userService.updateAsset(file.tmpPath)
		})
	}

}

module.exports = UserController
