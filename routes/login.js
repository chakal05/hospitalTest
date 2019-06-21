const express = require('express');
const router = express.Router();
const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


// todo Protect password 

const jwtSecret = process.env.JWT_SECRET || 'secret';

function jwtLogUser(user) {
  const one_week = 60 * 60 * 24 * 7;
  return jwt.sign(user, jwtSecret, {
    expiresIn: one_week
  })
}

async function checkUser() {
  const connection = await mongo.connect(url, { useNewUrlParser: true });
  return connection.db('peltier').collection('personel');

}



router.post('/', async function (req, res) {
  let userName = req.body.name;
  let userPass = req.body.pass;
  let query = await checkUser();
  let search = await query.find({ name: userName }).toArray();

  /*
  let salt = bcrypt.genSaltSync(12);
  let hash = bcrypt.hashSync(userPass, salt);
  console.log("user name is " + userName);
  console.log("hashed pass is " + hash);
  console.log("user entered pass is " + userPass);
*/

  if (search.length > 0) {
    
    let user = search[0];
    user_id = search[0]._id;
    
   let check = bcrypt.compareSync(userPass, user.pass);

    if (check) {
      console.log("check is true");

      
    res.send({
      user: user,
      token: jwtLogUser({ id: user_id })
    }).end();


   } else {
      console.log("Check is false");
      res.status(404).send();
    }


  } else {
    console.log("user not found");
    res.status(404).send();
  }
  

})




module.exports = router;