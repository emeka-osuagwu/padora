/*
|--------------------------------------------------------------------------
| Packages Namespaces
|--------------------------------------------------------------------------
*/
const { validate, validateAll, formatters } = use("Validator");

class CloudineryValidation {

	async validateRegisterUser(data){

		let validationMessages = {
			"required": "{{ field }} cannot be empty please supply a valid value",
			"email.unique": "A user with this email already exist in the database",
			"phone_number.min": "Phone number should be at least 11 digits",
		};

		let rules = {
			email: "required|email|unique:users,email",
			password: "required|min:5",
		};

		let validation = await validateAll(data, rules, validationMessages, formatters.JsonApi);

		return validation;
	}

	async validateUploadBlob(data){

		let validationMessages = {
			"required": "{{ field }} cannot be empty please supply a valid value",
			"image.required": "blob image string is required",
			"image.string": "blob image should be a string",
		};

		let rules = {
			image: "required|string"
		};

		let validation = await validateAll(data, rules, validationMessages, formatters.JsonApi);

		return validation;
	}
}

module.exports = CloudineryValidation;