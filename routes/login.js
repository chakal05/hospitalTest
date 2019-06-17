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

// TODO Add server-side authentication , if fiels are empty
// TODO Hash passwords



router.post('/', async (req, res) => {
  let userName = req.body.name;
  let userPass = req.body.pass;
  let query = await checkUser();
  let search = await query.find({ name: userName }).toArray();

  if (search.length > 0) {

    let user = search[0];
    user_id = search[0]._id;
    let check = bcrypt.compareSync(userPass, user.password);
    if (check) {

    res.send({
      user: user,
      token: jwtLogUser({ id: user_id })
    }).end();
    } else {
      res.status(404).send();
    }

  } else {
    res.status(404).send();
  }

})




module.exports = router;