/*
|--------------------------------------------------------------------------
| Packages Namespaces
|--------------------------------------------------------------------------
*/
const Env = use("Env");
const cloudinary = require('cloudinary');

class CloudineryService {

	constructor(CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET) {
		cloudinary.config({
			cloud_name: CLOUDINARY_CLOUD_NAME,
			api_key: CLOUDINARY_API_KEY,
			api_secret: CLOUDINARY_API_SECRET
		});	
	}

	async updateAsset(data) {
		return await cloudinary.v2.uploader.upload(data, {folder: 'uniclip'});
	}
}

module.exports = CloudineryService;