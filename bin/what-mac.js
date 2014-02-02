#!/usr/bin/env node

var es = require('event-stream')
  , Mac = require('../index')
  , LineStream = require('byline').LineStream
  , linestream = new LineStream();

// Read stream data from command line
process.stdin.pipe(linestream)
    // Convert each buffer line to string values
    .pipe(es.map(function (data, callback) {
        callback(null, data.toString());
    }))
    // Find Mac data from each serial
    .pipe(es.map(function (data, callback) {
        Mac.bySerial(data, callback);
    }))
    // Push out to stdout
    .pipe(process.stdout);
