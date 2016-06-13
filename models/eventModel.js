/*----------------------------------------------------------------------------------------
 SCRIPT:
     /models/eventModel.js

 DESCRIPTION:
    Model definition of the Event 'class'

 -------------------
 Author: Hugo Lopez
 Date: 2016-05-25
 ----------------------------------------------------------------------------------------*/



// implementing the Constructor Pattern
var Event = function (artist, city, venue, date, price) {
    this.artist = artist;
    this.city = city;
    this.venue = venue;
    this.date = date;
    this.price = price;
};

// Constructor Pattern adding methods only once to prototype instead of one for each created object
Event.prototype.toString = function () {
    return this.artist
        + ' will be presenting at ' + this.venue + ' venue'
        + ' in ' + this.city
        + ' on ' + this.date + '.'
        + ' Ticket cost is £' + this.price;
};

// this module exports the Event model
module.exports = Event;