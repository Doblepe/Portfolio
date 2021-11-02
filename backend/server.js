// Check up the documentation (https://lo-victoria.com/how-to-build-a-contact-form-with-javascript-and-nodemailer )
const express = require("express");
const app = express();
const PORT =  process.env.PORT  || 5000;
/* const cors = require("cors");
const multiparty = require("multiparty"); */
require("dotenv").config();

app.get('/', (req, res)  =>{
    res.send('hello')
})

// Express server listening...
app.listen(PORT, function (err) {
	err
		? console.log("🔴 Servidor fallido")
		: console.log("🟢 Servidor a la escucha en el puerto:" + PORT)}); 



/*        
var nodemailer = require('nodemailer');
// email sender function
exports.sendEmail = function(req, res){
// Definimos el transporter
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.MAILUSER,
            pass: process.env.ADMINAPIPASS
        }
    });
 // Definimos el email
var mailOptions = {
    from: 'Remitente',
    to: 'destinatario@gmail.com',
    subject: 'Asunto',
    text: 'Contenido del email'
};
// Enviamos el email
transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error);
        res.send(500, err.message);
    } else {
        console.log("Email sent");
        res.status(200).jsonp(req.body);
    }
});
}; */