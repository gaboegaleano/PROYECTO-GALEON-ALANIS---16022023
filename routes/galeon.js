var express = require('express');
var router = express.Router();

/* GET Galeon page. */
router.get('/galeon', function(req, res, next) {
  res.render('galeon');
});

module.exports = router;
