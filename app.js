var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const https = require('https');
const fs = require('fs'); 
const os = require('os');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

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

// --------NO 1 & 2

// https.get('https://en.wikipedia.org/wiki/Tunde_Onakoya', (response) => {
//   console.log('statusCode:', response.statusCode);
//   // console.log('headers:', response.headers);

//   const fileData = fs.createWriteStream(path.join(__dirname, 'public', 'output.txt')); 

//   response.on('data', (data) => {
//     fileData.write(data); 
//   });

//   response.on('complete', () => {
//     console.log('Data completed')
//   })

//   response.on('close', () => { 
//     fileData.end(); 
//     console.log('Response closed');
//   });

// }).on('error', (error) => {
//   console.error(error);
// });

// // ---------- NO 3


// const filePath = path.join(__dirname, 'public', 'os-info.md'); 

// function formatUptime(uptime) {
//   const days = Math.floor(uptime / (60 * 60 * 24));
//   const hours = Math.floor((uptime % (60 * 60 * 24)) / (60 * 60));
//   const seconds = Math.floor((uptime % (60 * 60)) / 60);
//   return `${days}:${hours}:${seconds}`;
// }

// const content = `

// OS Arch: ${os.arch()}

// Uptime: ${formatUptime(os.uptime())}

// Home Dir: ${os.homedir()}\n`;

// fs.writeFile(filePath, content, 'utf8', (error) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log('OS info written');
//   }
// });

// --------

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
