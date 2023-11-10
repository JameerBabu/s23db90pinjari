var van = require('../models/van');
// List of all vans
// exports.van_list = function(req, res) {
// res.send('NOT IMPLEMENTED: van list');
// };

exports.van_list = async function(req, res) {
    try{
        thevans = await van.find();
        res.send(thevans);

    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);

    }
};

// for a specific van.
// exports.van_detail = function(req, res) {
// res.send('NOT IMPLEMENTED: van detail: ' + req.params.id);
// };

exports.van_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await van.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    

// Handle van create on POST.
// exports.van_create_post = function(req, res) {
// res.send('NOT IMPLEMENTED: van create POST');
// };

// Handle van create on POST.
exports.van_create_post = async function(req, res) {
    console.log(req.body)
    let document = new van();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"van_type":"goat", "cost":12, "size":"large"}
    document.Company = req.body.Company;
    document.Model = req.body.Model;
    document.cost = req.body.cost;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
    

// Handle van delete form on DELETE.
exports.van_delete = function(req, res) {
res.send('NOT IMPLEMENTED: van delete DELETE ' + req.params.id);
};
// Handle van update form on PUT.
exports.van_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: van update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.van_view_all_Page = async function(req, res) {
try{
thevans = await van.find();
res.render('vans', { title: 'van Search Results', results: thevans });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
