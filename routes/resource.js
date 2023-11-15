var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var van_controller = require('../controllers/van');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// van ROUTES ///
// POST request for creating a van.
router.post('/vans', van_controller.van_create_post);
// DELETE request to delete van.
router.delete('/vans/:id', van_controller.van_delete);
// PUT request to update van.
router.put('/vans/:id', van_controller.van_update_put);
// GET request for one van.
router.get('/vans/:id', van_controller.van_detail);
// GET request for list of all van items.
router.get('/vans', van_controller.van_list);
/* GET detail van page */
router.get('/detail', van_controller.van_view_one_Page);
/* GET create van page */
router.get('/create', van_controller.van_create_Page);
/* GET create update page */
router.get('/update', van_controller.van_update_Page);
/* GET delete van page */
router.get('/delete', van_controller.van_delete_Page);
module.exports = router;