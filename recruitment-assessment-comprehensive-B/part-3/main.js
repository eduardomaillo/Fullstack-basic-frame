const express = require('express');
const app = express();

const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

const routes = require('./routes')
const authController = require('./authController');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


app.get('/', routes.index);
app.post('/login', authController.login);
app.get('/secret', routes.secret);
app.post('/file', routes.store);



app.listen(9393, () => {
  console.log('listening at http://localhost:9393');
});