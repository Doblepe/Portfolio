// Check up the documentation (https://lo-victoria.com/how-to-build-a-contact-form-with-javascript-and-nodemailer )
const creds = require('./credential.json')
const cors = require('cors')

// console.log(creds)

let express = require('express');
let app = express();
let nodemailer = require('nodemailer');
const bodyParser = require('body-parser')

const path = require('path');
/* const router = express.Router() */

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(cors({
    orignin: "*"}
))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", 
    port: 587,
    secure: false,
  // service: 'Gmail',
  auth: {
    user: creds.auth.user,
    pass: creds.auth.pass 
  },
});

app.post('/mail', (req, res, next) => {
    var email = req.body.email
    var message = req.body.message
    var subject = req.body.subject
    var name = req.body.name
    var company = req.body.company

    const mailOptions = {
        from :  name,
        to : email,
        subject: subject,
        html: `${name} from ${company} <noreply@${name}.com> <br /><br /> ${message}`
    }

    transporter.sendMail(mailOptions, (err, data) => {
        if(err){
            res.json({
                status:"err"
            }) 
            console.log(err)
            }
            else {
                res.json({
                    status: "success"
         })
         console.log("Email Sent" + data.response)
        }
    })
})

transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages!");
    }
  });

// serve PORT running here
const PORT = process.env.PORT || 3030
app.listen(PORT, () => console.info(`server has started on ${PORT}`))

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