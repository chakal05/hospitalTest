const express = require('express');
const router = express.Router();
const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';


async function loadTider() {
    const connection = await mongo.connect(url, { useNewUrlParser: true });
    return connection.db('peltier').collection('bookings');
}

router.post('/', async function (req, res) {
 
    let bookedHours = [];
     const dag = req.body.date;
     const jour = await loadTider();
     const day = jour.find({ date: dag
     }).toArray();
     const timmar = await day;
     timmar.forEach((el) => {
       bookedHours.push(el.heure);
     })
     res.send(bookedHours);
   
   })

   module.exports = router;