#!/usr/bin/node
const fs = require('fs');
const request = require('request');
request('http://swapi.co/api/films/' + process.argv[2]).pipe(fs.createWriteStream(process.argv[3]));
const resp = JSON.parse(body);
const characters = resp.characters;
for (let i = 0; i < characters.length; i++) {
	request(characters[i]).pipe(fs.createWriteStream(process.argv[3]));
	}
