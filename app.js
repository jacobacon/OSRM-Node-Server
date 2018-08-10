/**
 * Dependencies
 */

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
let fs = require('fs');
var OSRM = require('osrm');
var osrm;

/**
 * Setup argument listening.
 */
const argv = require('yargs')
    .usage("node bin/osrm-server {*.osrm} {--port X}")
    .example("node bin/osrm-server ./texas/texas-latest.osrm --port 8080")
    .demand(1)
    .argv;

console.log("Starting Server using OSRM File: " + argv._[0]);
/**
 * Check if the *.osrm file exists, otherwise kill the process.
 */

if (fs.existsSync(argv._[0])) {
    osrm = new OSRM(argv._[0]);
} else {
  console.error('File: %s does not exist!', argv._[0]);
  process.exit(1);
}

/**
 * Create an express instance.
 */

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * Listen for POST requests on /trip.
 */

app.post('/trip', function (req, res) {
    //If coordinates array is not present, send an error.
    if(!req.body.coordinates){
        res.status(400).send('Invalid Request');
    } else {
        //Build an OSRM options object.
        let options = {
            coordinates: req.body.coordinates,
            source: req.body.source,
            destination: req.body.destination
        };

        console.log('Routing %d coordinates...', req.body.coordinates.length);

        //Pass the options object in to osrm, and return the results in a callback.
        osrm.trip(options, function (err, result) {
            if (err) res.status(500).json(err);
            else {
                res.status(200).json(result);
            }
        });
    }
});

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
