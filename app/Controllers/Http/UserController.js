'use strict'

/*
|--------------------------------------------------------------------------
| Services Namespaces
|--------------------------------------------------------------------------
*/
const CloudineryService = use("App/Services/CloudineryService");
const CloudineryValidation = use("App/Validations/CloudineryValidation");

/*
|--------------------------------------------------------------------------
| Services initialization
|--------------------------------------------------------------------------
*/
const cloudineryService = new CloudineryService();
const cloudineryValidation = new CloudineryValidation();

class UserController {
	
	async index({request, response}){

		let validation = await contentValidation.validateCreateContent(request.all());

		if(validation.fails()) {
			return response.send({
				status: 400,
				data: validation.messages()
			});
		}

		const file = request.file('file')

		const userService = new CloudineryService('arm', '169264285654842', 'M_8S1mNBX_Q4s8KCUrCJDk4wI0g');

		return response.send({
			// data: await userService.updateAsset(file.tmpPath)
		})
	}
}

module.exports = UserController
