var express = require('express');
var passport = require('passport');
const van_controlers= require('../controllers/van');
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }
var router = express.Router();
/* GET vans */
router.get('/', van_controlers.van_view_all_Page );
/* GET detail van page */
router.get('/detail', van_controlers.van_view_one_Page);
/* GET create van page */
router.get('/create', secured, van_controlers.van_create_Page);
/* GET create update page */
// A little function to check if we have an authorized user and continue on

router.get('/update', secured,van_controlers.van_update_Page);
/* GET delete van page */
router.get('/delete', secured, van_controlers.van_delete_Page);
router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
    });
    
module.exports = router;