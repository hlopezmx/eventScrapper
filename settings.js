/*----------------------------------------------------------------------------------------
 SCRIPT:
     /settings.js

 DESCRIPTION:
    Configure the scraper. This makes it easier to update the selectors
    in case the source website changes the format or urls.

 -------------------
 Author: Hugo Lopez
 Date: 2016-05-25
 ----------------------------------------------------------------------------------------*/

var Settings = {
    url: 'http://www.wegottickets.com/searchresults/all',   // the source page to be scraped
    selector: {                                             // the selectors
        container: '.block-group',                          // the container block for each event
        artist: 'h2',                                       // selector for the artist info
        venue: '.venue-details h4:nth-child(1)',            // selector for the venue info
        date_time: '.venue-details h4:nth-child(2)',        // selector for the date and time info
        price: '.searchResultsPrice'                        // selector for the price info
    }
}

// this module export the Settings object
module.exports = Settings;