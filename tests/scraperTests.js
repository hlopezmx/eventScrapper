/*----------------------------------------------------------------------------------------
 SCRIPT:
 /tests/eventControllerTests.js

 DESCRIPTION:
    Tests the scraper directly

 -------------------
 Author: Hugo Lopez
 Date: 2016-05-25
 ----------------------------------------------------------------------------------------*/

// required libraries
var express = require('express'),
    chai = require('chai'),
    Event = require('../models/eventModel'),
    Scraper = require('../helpers/scraper'),
    Settings = require('../settings');

var expect = chai.expect;

// test the scrapper including the connection to wegottickets
describe('Scraper', function () {
    it('Scraper should return an array of Event objects from the source site', function () {
        var events = Scraper.getEvents(Settings.url);
        expect(Object.prototype.toString.call(events)).to.equal('[object Array]');
    });
    it('The events should include an artist', function () {
        var events = Scraper.getEvents(Settings.url);
        for (iEvent in events) {
            expect(events[iEvent].artist).to.be.a('string');
        }
    });
});

