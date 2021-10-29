// Check up the documentation (https://lo-victoria.com/how-to-build-a-contact-form-with-javascript-and-nodemailer )
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
require("dotenv").config();
// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

const PORT =  process.env.PORT  || 5000;

// instantiate an express app
const app = express();
// cors
app.use(cors({ origin: "*" }));

app.use("/public", express.static(process.cwd() + "/public")); //make public static

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.MAILUSER, 
    pass: process.env.ADMINAPIPASS, 
  },
});
// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.post("http://localhost:5000/send", (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message

    const mail = {
      sender: `${data.name} <${data.email}>`,
      to: process.env.MAILUSER, // receiver email,
      subject: data.subject,
      text: `${data.name} <${data.email}> \n${data.message}`,
    };
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send("Something went wrong.");
      } else {
        res.status(200).send("Email successfully sent to recipient!");
      }
    });
  });

/* //Index page (static HTML)
app.route("/").get(function (req, res) {
  res.sendFile(process.cwd() + "/public/index.html");
});
 */
// Express server listening...
app.listen(PORT, function (err) {
	err
		? console.log("🔴 Servidor fallido")
		: console.log("🟢 Servidor a la escucha en el puerto:" + PORT)}); 