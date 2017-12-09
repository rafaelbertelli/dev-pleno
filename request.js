const request = require('request');
const fs = require('fs');

const url = 'https://ironmaiden.com/';

// Simple Request
// request(url, function(err, res, body) {
// 	if(!err && res.statusCode === 200) {
// 		console.log(body);
// 	}
// });

// Streaming
// request(url).pipe(fs.createWriteStream('./not-commit/iron.html'));
request('https://ironmaiden.com/media/news/thumbnail/9183546.jpg').pipe(fs.createWriteStream('./not-commit/thumb2.png'));

