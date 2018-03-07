const mongoose = require('mongoose');
const Tasks = require('./../models/TaskModel');


module.exports = {

  // Retrieve all documents from the database collection //
  getTasks: (req, res) => {
    Tasks.find((err, docs) => {
      if (err) {
        return res.send(err)
      }
      return res.send(docs);
    });
  },

  // Create a new document in the database collection //
  postTask: (req, res, next) => {
    const newTask = {
      item: req.body.item
    }
    Tasks.create(newTask, (err, doc) => {
      if (err) { 
        return res.send(err)
      }
      return res.send(doc); 
    });
  },

  // Delete document on the database collection based on ID //
  deleteTask: (req, res, next) => {
    Tasks.findOneAndRemove({'_id.$oid': req._id}, (err, doc) => {
      if (err) { 
        return res.send(err)
      }
      return res.send(doc); 
    });
  }

};
