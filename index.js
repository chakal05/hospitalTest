const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// Middleware 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

const reservations = require('./routes/reservations');
const login = require('./routes/login');
const loadHours = require('./routes/loadHours');
const register = require('./routes/register');
app.use('/reservations', reservations);
app.use('/login', login);
app.use('/loadHours', loadHours);
app.use('/register', register);


// Production mode 

    // Static folder
    app.use(express.static(__dirname + '/public/'));
 // SPA
 app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));



const port = process.env.port || 3000;
app.listen(port, () => console.log("app running on port 3000"));

