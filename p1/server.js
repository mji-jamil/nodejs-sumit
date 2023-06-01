const fs = require('fs');
const EventEmitter = require('events');
const http = require('http');

// fs.writeFileSync('myFile.txt', 'Hello world');
// const data = fs.readFileSync('myFile.txt', 'utf-8');
// console.log(data);
//
// fs.readFile('myFile.txt', 'utf-8', (err, data) => {
//     console.log(data);
// });
//
// console.log('Reading file...');

// const emitter = new EventEmitter();
// emitter.on('bellRing', () => {
//     console.log('We need to run');
// });
// emitter.emit(`bellRing`);

// Stream and Buffer
const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);
ourReadStream.pipe(ourWriteStream);
ourReadStream.on('data', (chunk) => {
    console.log(chunk);
    // console.log(chunk.toString());
});

console.log('Hello');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello Programmer');
        res.end();
    } else if (req.url === '/about') {
        req.on('data', (chunk) => {
            console.log(chunk);
        });
        res.write('About page');
        res.end();
    } else {
        res.write('Not found');
        res.end();
    }
});

server.listen(3000);
