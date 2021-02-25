const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser  = require ('body-parser') 

const indexRouter = require('./routes/routes');

const db = require('./models/posts')
const app = express();

require('./db')
// // debug.sequelize.sync();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());


app.use('/', indexRouter);

app.listen(4000, () =>{
    console.log("Escuchando en http://localhost:4000")
} );



module.exports = app;
