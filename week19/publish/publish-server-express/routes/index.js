var express = require('express');

var fs = require('fs')
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  fs.writeFileSync('../server/public/' + req.query.filename, req.body.content)
  res.send('hello world!')
});

module.exports = router;
