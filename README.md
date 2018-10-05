# Feed Reader Testing

## Table of Contents

* [Installation](#installation)
* [Dependencies](#dependencies)
* [How to Run](#how-to-run)

## Installation

Clone or download from [the repo](https://github.com/gjudy/feed-reader-testing.git).
Otherwise, skip the download and visit [a live copy](https://gjudy.github.io/feed-reader-testing/).

## Dependencies

This project already includes [Jasmine](http://jasmine.github.io/) but requires additional access to:

* the Google JavaScript API (Feed API)
* `https://rsstojson.udacity.com/parseFeed` via AJAX POST requests
* the Handlebars.js library
* the jQuery library
* an ES6/ES2015 supported browser (the testing script is written in ES6)

Tests will fail if connections to any of the above are missing.

The project also uses the following:

* Google Fonts

## How to Run

### Access

From the root directory open the `index.html` file into an ES6-supported browser.

### Testing

The feed reader test script runs all tests automatically upon loading `index.html`. To run a set of tests within a suite click on the title of the suite; to run each test individually click on the title of the spec. An option to run all specs is available after one spec or a suite of specs are run. Passes are in green and failures are in red.

The web app itself has been pre-built ([source](https://github.com/udacity/frontend-nanodegree-feedreader)) and is functional. Selecting an item from the menu will display feed from the corresponding source.
