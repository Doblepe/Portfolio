const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'vidcobleperez@gmail.com', // generated ethereal user
      pass: 'bjdtgshkptbdhkhy', // generated ethereal password
    },
  });
  transporter.verify().then( ()=>{
      console.log('Ready for send emails');
  })