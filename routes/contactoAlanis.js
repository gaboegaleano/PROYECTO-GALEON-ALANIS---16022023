var express = require('express');
var router = express.Router();

/* GET contactoAlanis page. */
router.get('/', function(req, res, next) {
  res.render('contactoAlanis');
});

module.exports = router;
