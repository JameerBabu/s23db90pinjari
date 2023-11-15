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
    // {"Company":"goat", "cost":12, "model":"large"}
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
// exports.van_delete = function(req, res) {
// res.send('NOT IMPLEMENTED: van delete DELETE ' + req.params.id);
// };



// Handle van delete on DELETE.
exports.van_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await van.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};

// Handle van update form on PUT.
// exports.van_update_put = function(req, res) {
// res.send('NOT IMPLEMENTED: van update PUT' + req.params.id);
// };


//Handle van update form on PUT.
exports.van_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await van.findById( req.params.id)
// Do updates of properties
if(req.body.Company)
toUpdate.Company = req.body.Company;
if(req.body.cost) toUpdate.cost = req.body.cost;
if(req.body.Model) toUpdate.Model = req.body.Model;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
}

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

// Handle a show one view with id specified by query
exports.van_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await van.findById( req.query.id)
    res.render('vandetail',
    { title: 'van Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle building the view for creating a van.
// No body, no in path parameter, no query.
// Does not need to be async
exports.van_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('vancreate', { title: 'van Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };    