
module.exports = {

  signin: (req, res) => {
    if (req.body.user === 'codesmith' && req.body.pass === 'ilovetesting') {
      res.cookie('token', 'admin');
      res.redirect('./secret')
    }
    else {
      res.send('unsuccessful login attempt'); 
    }
  }

};
