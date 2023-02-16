var express = require('express');
var router = express.Router();

/* GET ubicacion page. */
router.get('/ubicacion', function(req, res, next) {
  res.render('ubicacion');
});

module.exports = router;
