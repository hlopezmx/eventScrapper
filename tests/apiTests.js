/*----------------------------------------------------------------------------------------
 SCRIPT:
 /tests/eventControllerTests.js

 DESCRIPTION:
    Tests the API, mocking the data. This allows to test functionality
    when data is incorrect, for example, empty artist.

 -------------------
 Author: Hugo Lopez
 Date: 2016-05-25
 ----------------------------------------------------------------------------------------*/

// required libraries
var express = require('express'),
    chai = require('chai'),
    Event = require('../models/eventModel'),
    request = require('supertest');

var expect = chai.expect;
var app = express();

// mocks the api response to test without calling wegottickets
app.get('/api/events', function (req, res) {
    res.status(200).json([
        new Event('Rolling Stones', 'London', 'Wembley Arena', '23/07/2016', '68.55'),
        new Event('The Animals', 'London', 'O2 Arena', '13/06/2016', '64.43'),
    ])
});

// supertest, from end to end
describe('API', function () {
    it('GET on /api/events should return an array of Event objects', function (done) {
        request(app)
            .get('/api/events')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                expect(err).to.equal(null);
                expect(res.body).to.be.an('array');
                done();
            });
    });

    it('The events should include an artist', function (done) {
        request(app)
            .get('/api/events')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                for (var iEvent = 0; iEvent < res.body.length; iEvent++) {
                    expect(res.body[iEvent].artist).not.to.be.empty;
                }
                done();
            });
    });


});