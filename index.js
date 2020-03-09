var express = require('express');
var router = express.Router();

var names = [

  {
    email: "ashik@gmail.com", password: "password"
  },
  {
    email: "dinesh@gmail.com", password: "password1"
  },
  {
    email: "akhil@gmail.com", password: "password2"
  }

]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send("server is running");
});

router.post('/login', function (req, res) {
  let result = names.find(name => name.email == req.body.email);
  console.log("Request", req.body);
  console.log("Result", result);
  if (result) {
    if (result.password == req.body.password) {
      res.status(200).json({
        message: "successful login"
        })
    }
    else {
      res.status(200).json({
          message: "password incorrect"
        }) 
      }
  }else {
    res.status(200).json({
        message: "usernot found"
      }) 

}

})

module.exports = router;
