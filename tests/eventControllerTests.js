/*----------------------------------------------------------------------------------------
 SCRIPT:
 /tests/eventControllerTests.js

 DESCRIPTION:
    Tests the Event Controller directly.


 -------------------
 Author: Hugo Lopez
 Date: 2016-05-25
 ----------------------------------------------------------------------------------------*/

// required libraries
var express = require('express'),
    chai = require('chai'),
    EventController = require('../controllers/eventController'),
    Event = require('../models/eventModel');

var expect = chai.expect;


describe('EventController', function () {
    it('Event Controller should return an array of Event objects', function () {
        var events = EventController.getEvents();
        expect(Object.prototype.toString.call(events)).to.equal('[object Array]');
    });

});

