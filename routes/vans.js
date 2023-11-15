var express = require('express');
const van_controlers= require('../controllers/van');
var router = express.Router();
/* GET vans */
router.get('/', van_controlers.van_view_all_Page );
/* GET detail van page */
router.get('/detail', van_controlers.van_view_one_Page);
/* GET create van page */
router.get('/create', van_controlers.van_create_Page);
/* GET create update page */
router.get('/update', van_controlers.van_update_Page);
/* GET delete van page */
router.get('/delete', van_controlers.van_delete_Page);
module.exports = router;