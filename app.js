var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,{useNewUrlParser: true,useUnifiedTopology: true});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var vanRouter = require('./routes/van');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var Van = require("./models/van");
var resourceRouter = require('./routes/resource');
var vanRouter = require('./routes/van')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/van', vanRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
  console.log("Connection to DB succeeded")
});


async function recreateDB(){
  // Delete everything
  await Van.deleteMany();

  let instance1 = new Van({Company:"Minivan", Model:'large', cost:15.4});
  instance1.save().then(doc=>{
    console.log("First object saved")}
  ).catch(err=>{
    console.error(err)
  });

  let instance2 = new Van({Company:"Ram ProMaster", Model:'old', cost:14.3});
  instance2.save().then(doc=>{
    console.log("Second object saved")}
  ).catch(err=>{
    console.error(err)
  });

  let instance3 = new Van({Company:"Berlingo", Model:'medium', cost:159.2});
  instance3.save().then(doc=>{
    console.log("Third object saved")}
  ).catch(err=>{
    console.error(err)
  });

  let instance4 = new Van({Company:"Mercedes-Benz Sprinter", Model:'New', cost:95.1});
  instance4.save().then(doc=>{
    console.log("Fourth object saved")}
  ).catch(err=>{
    console.error(err)
  });

  let instance5 = new Van({Company:"Ram ProMaster City", Model:'New', cost:105.0});
  instance5.save().then(doc=>{
    console.log("Fifth object saved")}
  ).catch(err=>{
    console.error(err)
  });

  }

  let reseed = true;
  if (reseed) {recreateDB();}
  

module.exports = app;
