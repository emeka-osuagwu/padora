'use strict'
/*
|--------------------------------------------------------------------------
| Services Namespaces
|--------------------------------------------------------------------------
*/
const nodemailer = require('nodemailer');
const CloudineryService = use("App/Services/CloudineryService");
const CloudineryValidation = use("App/Validations/CloudineryValidation");

/*
|--------------------------------------------------------------------------
| Services initialization
|--------------------------------------------------------------------------
*/
const cloudineryService = new CloudineryService();
const cloudineryValidation = new CloudineryValidation();

class MailController {

    async send({request, response}){

        response.send('fvdjkh')



        nodemailer.createTestAccount((err, account) => {

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: 'smtp.mailtrap.io',
                port: 2525,
                secure: false,
                auth: {
                    user: "e6ef6997fc23e3",
                    pass: "db2fc14a3f00ce"
                }
            });

            // setup email data with unicode symbols
            let mailOptions = {
                from: "noreply@emeka.com", // sender address
                to: 'emeka.osuagwu@spongegroup.com.ng', // list of receivers
                subject: 'Hello ✔', // Subject line
                text: 'Hello world?', // plain text body
                html: request.input('html') // html body
            };

            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            });
        });
    }
}

module.exports = MailController
