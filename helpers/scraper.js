/*----------------------------------------------------------------------------------------
 SCRIPT:
 /helpers/scraper.js

 DESCRIPTION:
 Scraper functionality.
 Configuration is taken from: /settings.js

 -------------------
 Author: Hugo Lopez
 Date: 2016-05-25
 ----------------------------------------------------------------------------------------*/

// required libraries
var Settings = require('../settings'),
    Xray = require('x-ray');

// instance the Xray scraper object
var x = Xray();

// definition of the scraper, based on the configuration defined on the /settings.js script
var Scraper = function () {

    // the url for the page to be scraped
    var url = Settings.url;

    // the array of Event objects to be populated
    var events = [];

    // configuration of the elements to be scraped
    x(url, Settings.selector.container, [{
        artist: Settings.selector.artist,
        venue: Settings.selector.venue,
        date_time: Settings.selector.date_time,
        price: Settings.selector.price
    }])
    // action function
    (function (err, obj) {
        // populate the Events array wit the results
        events = obj;
    })
    return {
        // the public method getEvents returns the array of Events
        getEvents: function () {
            return events;
        }
    }
}();
// use closure to apply the Singleton Pattern
// making sure we only have a single instance of the scraper object


// this module exports the scraper singleton object
module.exports = Scraper;
