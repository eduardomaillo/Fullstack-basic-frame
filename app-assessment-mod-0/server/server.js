const express = require('express');
const app = express();

const path = require('path')
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

const routes = require('./routes')
const taskController = require('./controllers/taskController');
const authController = require('./controllers/authController');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.post('/signin', authController.signin)

app.get('/css/style.css', routes.style)
app.get('/js/index.js', routes.jsFile)
app.get('/', routes.index)
app.get('/secret', routes.secret)

app.get('/retrieveTasks', taskController.getTasks);
app.post('/insertTask', taskController.postTask);
app.delete('/removeTask', taskController.deleteTask);


app.listen(3333, () => {
  console.log('Listening at http://localhost:3333/')
});