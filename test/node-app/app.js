// const http = require('http');
// const fs = require('fs');

// program 1
// const hostname = '127.0.0.1';
// const port = 3000;

// fs.readFile('index.html', (err, html) =>{
// 	if(err){
// 		throw err;
// 	}

// 	const server = http.createServer((req,res)=>{
// 		res.statusCode = 200;
// 		res.setHeader('Content-type','text/html');
// 		res.write(html);
// 		res.end();
// 	});

// 	server.listen(port, hostname, () => {
// 		console.log('Server started on port '+port);
// 	});
// });

// program 2
// fs.writeFileSync('notes.txt','This file was created by nodejs');
// fs.appendFileSync('notes.txt','This is the text to be append on to the file.');

// program 3
const add = require('./tuba.js');
const sum = add(2,3);
console.log(sum);