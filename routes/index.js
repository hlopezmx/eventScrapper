/*----------------------------------------------------------------------------------------
 SCRIPT:
 /routes/index.js

 DESCRIPTION:
 Route file. Takes care of the calls to the API and routes to the appropiate controller

 -------------------
 Author: Hugo Lopez
 Date: 2016-05-25
 ----------------------------------------------------------------------------------------*/

// required libraries
var express = require('express'),
    EventController = require('../controllers/eventController');

// definition of the router
var eventRouter = express.Router();
eventRouter.route('/events')

    // GET call handler
    .get(function (req, res) {

        // asks for the events to the Event Controller
        // and returns the array of Event objects, in JSON format
        res.json(EventController.getEvents());
    });

// this module exports the router
module.exports = eventRouter;