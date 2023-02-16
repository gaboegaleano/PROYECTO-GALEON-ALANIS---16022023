var express = require('express');
var router = express.Router();

/* GET productosAlanis page. */
router.get('/productosAlanis', function(req, res, next) {
  res.render('productosAlanis');
});

module.exports = router;
