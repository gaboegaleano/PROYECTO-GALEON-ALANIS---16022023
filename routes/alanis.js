var express = require('express');
var router = express.Router();

//GET Alanis page. 
router.get('/', function(req, res, next) {
  res.send('alanis');//llama a view/Alanis.hbs
});

module.exports = router;
