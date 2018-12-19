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

    async sendOther({request, response}){

        nodemailer.createTestAccount((err, account) => {

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: request.header('MAIL_HOST'),
                port: request.header('MAIL_PORT'),
                secure: false,
                auth: {
                    user: request.header('MAIL_USERNAME'),
                    pass: request.header('MAIL_PASSWORD')
                }
            });

            // setup email data with unicode symbols
            let mailOptions = {
                from: request.input('sender'), // sender address
                to: request.input('receiver'), // list of receivers
                subject: request.input('subject'), // Subject line
                // text: 'Hello world?', // plain text body
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

    async send({request, response}){

        nodemailer.createTestAccount((err, account) => {

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: request.header('MAIL_HOST'),
                port: request.header('MAIL_PORT'),
                secure: false,
                auth: {
                    user: request.header('MAIL_USERNAME'),
                    pass: request.header('MAIL_PASSWORD')
                }
            });

            // setup email data with unicode symbols
            let mailOptions = {
                from: request.input('sender'), // sender address
                to: request.input('receiver'), // list of receivers
                subject: request.input('subject'), // Subject line
                // text: 'Hello world?', // plain text body
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
