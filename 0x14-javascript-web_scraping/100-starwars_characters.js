#!/usr/bin/node
const fs = require('fs');
const request = require('request');
request('http://swapi.co/api/films/' + process.argv[2]).pipe(fs.createWriteStream(process.argv[3]));
