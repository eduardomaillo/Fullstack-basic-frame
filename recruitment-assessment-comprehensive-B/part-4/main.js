const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const myURI = 'mongodb://test-user:test-user@ds151508.mlab.com:51508/eduardo-test';
const URI = process.env.MONGO_URI || myURI;

mongoose.connect(URI)
mongoose.connection.once('open', () => {
  console.log('Connected with MongoDB server - eduardo-test database');
});

const MovieSchema = new Schema ({
  title: {type: String, required: true},
  rating: {type: Number, required: false},
  category: {type: String, required: false},
  awarded: {type: Boolean, required: true},
  released: Date
})
 
const Movies = mongoose.model('Movie', MovieSchema)

app.get('/', (req, res) => {
  res.setHeader('content-type', 'text/html');
  res.sendFile(path.resolve('./part-4/index.html'));
})

app.get('/movies', (req, res) => {
  Movies.find((err, docs) => {
    if (err) {
      return res.send(err)
    }
    return res.send(docs);
  })
})


app.post('/movies', (req,res) => {
  const newMovie = {
    title: req.body.title,
    rating: req.body.rating,
    category: req.body.category,
    awarded: req.body.awarded,
    released: new Date (req.body.released)
  }
  console.log(newMovie)
  Movies.create(newMovie, (err, docs) => {
    if (err) {
      return res.send(err)
    }
    return res.send(docs);
  }); 
})


app.listen(9494, () => {
  console.log('listening at http://localhost:9494');
});
