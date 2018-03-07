const path = require('path')
const fs = require('fs');

const routes = {
  
  index: (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(path.resolve('./part-3/index.html'))
  },

  secret: (req, res) => {
    if(req.cookies.role === 'admin') {
      res.send('secret page');
    }
    else {
      res.send('denied');
    }
  },

  store: (req, res) => {
    const JSONtext = JSON.stringify(req.body.text)
    fs.writeFile('./part-3/data.json', JSONtext, (err) => {
      if (err) throw err;
      res.end()
    })
  }
} 

module.exports = routes