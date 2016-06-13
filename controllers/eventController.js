/*----------------------------------------------------------------------------------------
 SCRIPT:
 /controllers/eventController.js

 DESCRIPTION:
 Controller logic for the Event resource

 -------------------
 Author: Hugo Lopez
 Date: 2016-05-25
 ----------------------------------------------------------------------------------------*/

// required libraries
var Scraper = require('../helpers/scraper');

// definition of the controller
var EventController = {

    // method to request the events to the scraper.
    // It's very simple, but it follows the MVC architecture pattern
    getEvents: function () {
        return Scraper.getEvents();
    }
}

// this module exports the controller
module.exports = EventController;
