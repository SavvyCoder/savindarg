//
// # SimpleServer
//
//
var http = require('http');
var path = require('path');

var async = require('async');
var express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const keys = require('./keys.js').keys;

//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router);
router.use(bodyParser.urlencoded({ extended: true }));

// POST route from contact form
router.post('/contact', function(req, res) {
  let mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: keys.user,
      pass: keys.password
    }
  });
  mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: keys.user,
    subject: 'New message from contact form at savinda.org',
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  };
  smtpTrans.sendMail(mailOpts, function(error, response) {
    if (error) {
      console.log("Failure!");
      res.status(204).send()
    }
    else {
      console.log("Success!");
      res.status(204).send()
    }
  });
});


router.use(express.static(path.resolve(__dirname, 'client')));


server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
  var addr = server.address();
  console.log("Server running at", addr.address + ":" + addr.port);
});
