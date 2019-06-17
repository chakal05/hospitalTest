const express = require('express');
const router = express.Router();
//const nodemailer = require('nodemailer');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/peltier', { useNewUrlParser: true });

//Connection URL
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function () {
//  console.log("connected to mongodb");
//});
//
var bookingSchema = new mongoose.Schema({
  nom: String,
  prénom: String,
  téléphone: Number,
  email: String,
  date: String,
  heure: String
})
/*

let testAccount =  nodemailer.createTestAccount();
let transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: testAccount.user, // generated ethereal user
    pass: testAccount.pass // generated ethereal password
  }
});

var mailOptions = {
  from: 'chakirrasta@gmail.com',
  to: 'jamal.dikenebe@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
*/
async function loadTider() {
  let booking = mongoose.model('booking', bookingSchema);
  return booking;
}

// TODO Send the _id if they want an email confirmation and send email

router.post('/', async function (req, res) {
  const nyTid = {
    nom: req.body.lastName,
    prénom: req.body.firstName,
    téléphone: req.body.phone,
    email: req.body.email,
    date: req.body.date,
    heure: req.body.time

  };

  var connexion = await loadTider();
  var post = new connexion(nyTid);
 
  if (post.save()) {
       res.status(200).end();
     }
  })

module.exports = router;