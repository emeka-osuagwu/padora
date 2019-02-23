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

class CloudineryController {

    async imageUpload({request, response}){

        const file = request.file('file')

        const cloudineryService = new CloudineryService(request.header('CLOUDINARY_CLOUD_NAME'), request.header('CLOUDINARY_API_KEY'), request.header('CLOUDINARY_API_SECRET'));

        return response.send({
            data: await cloudineryService.updateAsset(file.tmpPath)
        })
    }

    /**
     * [videoUpload description]
     * @param  {[type]} options.request  [description]
     * @param  {[type]} options.response [description]
     * @return {[type]}                  [description]
     */
    async videoUpload({request, response}){

        const file = request.file('file')

        return file;

        const cloudineryService = new CloudineryService(request.header('CLOUDINARY_CLOUD_NAME'), request.header('CLOUDINARY_API_KEY'), request.header('CLOUDINARY_API_SECRET'));

        return response.send({
            data: await cloudineryService.videoAsset(file.tmpPath)
        })
    }

    async blobUpload({request, response}){

        let validation = await cloudineryValidation.validateUploadBlob(request.all());

        if(validation.fails()) {
            return response.status(400).send({
                status: 400,
                data: validation.messages()
            });
        }

        const cloudineryService = new CloudineryService(request.header('CLOUDINARY_CLOUD_NAME'), request.header('CLOUDINARY_API_KEY'), request.header('CLOUDINARY_API_SECRET'));

        return response.status(200).send({
            status: 200,
            data: await cloudineryService.updateAsset(request.input('image'))
        })
    }
}

module.exports = CloudineryController
