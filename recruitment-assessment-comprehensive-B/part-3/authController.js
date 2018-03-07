module.exports = {
  
    login: (req, res) => {
      if (req.body.password === '123') {
        res.cookie('role', 'admin');
        res.redirect('./secret')
      }
      else {
        res.send('unsuccessful login attempt'); 
      }
    }
  
  };