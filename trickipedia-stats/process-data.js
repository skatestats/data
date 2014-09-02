#!/usr/bin/env node

// import modules
var d3 = require('d3'),
    fs = require('fs');

// open file and parse json
var file = fs.readFileSync('data.json', 'utf8');
var json = JSON.parse(file);

// nest trick data by skater
var results = d3.nest()
  .key(function(d) { return d.skater; })
  .sortKeys(d3.ascending)
  .entries(json);

// write new file
fs.writeFileSync('results.json', JSON.stringify(results));
