let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let session = require('express-session');
let flash = require('connect-flash');
let passport = require('passport');

let indexRouter = require('../routes/index');
let contactRouter = require('../routes/contact');
let inventoryRouter = require('../routes/inventory');
let usersRouter = require('../routes/users');
let contactListRouter = require('../routes/contactList');

let app = express();

app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: "sessionSecret"
}));

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// Sets up passport
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/contactme', contactRouter);
app.use('/inventory', inventoryRouter);
app.use('/users', usersRouter);
app.use('/list',contactListRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
