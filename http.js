const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello Software Engineer');
        res.end();
    } else if (req.url === '/about') {
        res.write('this is about our page');
        res.end();
    } else {
        res.write('Page not found');
        res.end();
    }
}); // server is like event emiter

// server.on('connection', () => {
//     console.log('New Connection....');
// });

server.listen(3000);

console.log('listenning to port 3000');
