var express = require('express');
var router = express.Router();

/* GET quienesSomosAlanis page. */
router.get('/', function(req, res, next) {
  res.render('quienesSomosAlanis');
});

module.exports = router;
