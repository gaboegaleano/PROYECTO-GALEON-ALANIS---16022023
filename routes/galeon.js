var express = require('express');
var router = express.Router();

/* GET Galeon page. */
router.get('/', function(req, res, next) {
  res.render('galeon');
});

module.exports = router;
