const express = require('express');
const app = express();
const qr = require('qr-image');

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('home'));

app.get('/qrcode', (req, res) => {
	const url = 'https://www.github.com/rafaelbertelli'
	const code = qr.image(url, { type:'svg' });

	res.type('svg');
	code.pipe(res);
});

app.listen(3003, () => {
	console.log('Server running on localhost:3003');
});