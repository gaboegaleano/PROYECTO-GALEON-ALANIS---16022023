var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var alanisRouter = require('./routes/alanis');
var contactoRouter = require('./routes/contacto');
var contactoAlanisRouter = require('./routes/contactoAlanis');
var galeonRouter = require('./routes/galeon');
var productosRouter = require('./routes/productos');
var productosAlanisRouter = require('./routes/productosAlanis');
var quienesSomosRouter = require('./routes/quienesSomos');
var quienesSomosAlanisRouter = require('./routes/quienesSomosAlanis');
var ubicacionRouter = require('./routes/ubicacion');
var ubicacionAlanisRouter = require('./routes/ubicacionAlanis');


/****/

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/alanis', alanisRouter);
app.use('/contacto', contactoRouter);
app.use('/contactoAlanis', contactoAlanisRouter);
app.use('/galeon', galeonRouter);
app.use('/productos', productosRouter);
app.use('/productosAlanis', productosAlanisRouter);
app.use('/quienesSomos', quienesSomosRouter);
app.use('/quienesSomosAlanis', quienesSomosAlanisRouter);
app.use('/ubicacion', ubicacionRouter);
app.use('/ubicacionAlanis', ubicacionAlanisRouter);
/****/

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
