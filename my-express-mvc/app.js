var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// KONEKSI KE MONGODB
require('./app_server/models/db');

var indexRouter = require('./app_server/routes/index'); //tambahkan app_server
var usersRouter = require('./app_server/routes/users'); //tambahkan app_server

var mahasiswaRouter = require('./app_server/routes/mahasiswa'); //tambahkan router mahasiswa
var housingRouter = require('./app_server/routes/housing'); //tambahkan router mahasiswa

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views')); //tambahkan app_server untuk memberi tau posisi direktori views di dlm app_server
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// API
app.use('/api', mahasiswaRouter);
app.use('/housing', housingRouter);

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

module.exports = app;
