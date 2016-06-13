/*----------------------------------------------------------------------------------------
 SCRIPT:
    /app.js

 DESCRIPTION:
    Main script to be executed by Nodejs

 INCLUDED LIBRARIES (from NPM: node package manager)
    -Express: Minimalistic framework that takes care of the http calls and routes table
    -Mocha, Chai and Supertest: For testing
    -X-Ray: for web scraping

 IMPLEMENTED PATTERNS
    -MVC Architectural Pattern
    -Module Pattern, splitting the code by logical use
    -Singleton Pattern (for the scraper object)
    -Constructor Pattern (for the Event model), using prototype to add methods only once to the model

 -------------------
 Author: Hugo Lopez
 Date: 2016-05-25
 ----------------------------------------------------------------------------------------*/

// required libraries
var express = require('express'),
    eventRouter = require('./routes/index');

// start the express minimalistic framework
var app = express();

// define the port to listen to
var port = process.env.PORT || 8888;

// set the root URL for the api
app.use('/api', eventRouter);

// start listening to the defined port
app.listen(port, function () {
    console.log('Service running on PORT: ' + port);
})