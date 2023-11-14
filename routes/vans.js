var express = require('express');
const van_controlers= require('../controllers/van');
var router = express.Router();
/* GET costumes */
router.get('/', van_controlers.van_view_all_Page );
/* GET detail costume page */
router.get('/detail', van_controlers.van_view_one_Page);
module.exports = router;