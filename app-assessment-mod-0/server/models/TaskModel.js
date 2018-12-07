const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const myURI = 'mongodb://test-user:test-user@dsxxxxxx.mlab.com:xxxx/xxxxxx-test';
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
