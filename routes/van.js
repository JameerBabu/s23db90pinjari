var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('van', { title: 'Search Results Van' });
});

module.exports = router;
