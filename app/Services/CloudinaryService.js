/*
|--------------------------------------------------------------------------
| Packages Namespaces
|--------------------------------------------------------------------------
*/
const Env = use("Env");
const cloudinary = require('cloudinary');

cloudinary.config({
	cloud_name: Env.get('CLOUDINARY_CLOUD_NAME'),
	api_key: Env.get('CLOUDINARY_API_KEY'),
	api_secret: Env.get('CLOUDINARY_API_SECRET')
});

class CloudineryService {

	async updateAsset(data) {
		return await cloudinary.v2.uploader.upload(data, {folder: 'uniclip'});
	}
}

module.exports = CloudineryService;