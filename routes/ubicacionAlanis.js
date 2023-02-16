var express = require('express');
var router = express.Router();

/* GET ubicacionAlanis page. */
router.get('/ubicacionAlanis', function(req, res, next) {
  res.render('ubicacionAlanis');
});

module.exports = router;
