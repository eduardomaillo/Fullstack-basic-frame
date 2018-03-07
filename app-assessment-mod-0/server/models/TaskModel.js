const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const myURI = 'mongodb://test-user:test-user@ds151508.mlab.com:51508/eduardo-test';
const URI = process.env.MONGO_URI || myURI;

mongoose.connect(URI)
mongoose.connection.once('open', () => {
  console.log('Connected with MongoDB server - eduardo-test database');
});

const taskSchema = new Schema ({
  item: {type: String, required: true},
  created_at: {type: Date, default: Date.now}
})

const Tasks = mongoose.model('Task', taskSchema)

module.exports = Tasks; 
