var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose =require('mongoose');
var mongoDB ='mongodb+srv://hemanth_mongodb:5tp16JFAGE4n5Zg7@cluster0.kxiw3.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser:true,useUNifiedTopology:true});
var db =mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));

var compression = require('compression');
var helmet =require('helmet');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var catalogRouter =require('./routes/catalog');
var wiki = require('./routes/wiki');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(helmet());

var app = express();
app.use(compression());

app.use(express.static(path.join(_dirname,'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/wiki',wiki);
app.use('/catalog',catalogRouter);

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
