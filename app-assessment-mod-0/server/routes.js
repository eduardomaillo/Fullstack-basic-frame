const express = require('express');
const path = require('path')

const routes = {

  style: (req, res) => {
    res.setHeader('content-type', 'text/css');
    res.sendFile(path.resolve('assets/css/style.css'))
    
  },

  jsFile: (req, res) => {
    res.setHeader('content-type', 'text/js');
    res.sendFile(path.resolve('assets/js/index.js'))
    
  },

  index: (req, res) => {
    res.setHeader('content-type', 'text/html');
    res.sendFile(path.resolve('views/index.html'))
  },

  secret: (req, res) => {
    if (req.cookies.token === 'admin') {
      res.setHeader('content-type', 'text/html');
      res.sendFile(path.resolve('views/secret.html'))
    }
    else {
      res.send('You must be signed in to view this page')
    }
  }

}
 
module.exports = routes