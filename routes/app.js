var express = require('express');
var router = express.Router();
// var userModel = require('../models/user');

router.get('/', function(req, res, next) {
  res.render('index');
});

// router.get('/messages', function(req, res, next) {
//   userModel.findOne({}, function(err,doc){
//     if (err){
//       return res.send('non found!');
//     }
//       res.render('msg', {fName: doc.firstName});
//       console.log('find one function execetute for user model');
//   });
//
// });

// router.get('/messages/:ms',function(req,res,next){
//   res.render('msg',{info:req.params.ms});
// });

// router.post('/messages', function(req, res, next) {
//   var firstName = req.body.firstName;
//   var lastName = req.body.lastName;
//   var email = req.body.email;
//   var password = req.body.password;
//   // var messages = req.body.messages;
//
//   var user = new userModel({
//     firstName: firstName,
//     lastName: lastName,
//     password: password,
//     email: email
//     // messages: messages
//   });
//   user.save();
//   res.redirect('/messages');
// });

module.exports = router;
