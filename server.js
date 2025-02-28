const express = require('express');
const bodyParser = require('body-parser');
const dbase = require('./modules/dataBase');
const userRoutes = require('./routes/student_routes');
const cors = require('cors');
const passport = require('./modules/authentication');

require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(passport.initialize());

const authMiddleware = passport.authenticate('local', {session:false});


console.log('::Server is live.\n')


// Home of server which indicates that server is online and working
app.get('/', (req, res) => {

    res.send('<body bgcolor = "black"><font color = "white"><h2>Server is Online. Dark mode for eyecare :) </h2> <br> <h3>Darsh is lazy. Pls wait till he properly sets up the database and frontend</h3> <br> <h3>(^w^)</h3></font></body>');
})

//Use the endpoints defined in routes.js
app.use('/', userRoutes);

//Authentication using username and pass



//initiate server on port 3000
app.listen(port);