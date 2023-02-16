var express = require('express');
var router = express.Router();

/* GET quienesSomos page. */
router.get('/quienesSomos', function(req, res, next) {
  res.render('quienesSomos');
});

module.exports = router;
