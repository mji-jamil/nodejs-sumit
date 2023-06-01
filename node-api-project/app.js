const http = require('http');

// module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000,
};

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Listening to port ${app.config.port}`);
    })
};

// handle request response
app.handleReqRes = (req, res) => {
    // request handling


    // response handle
    res.end('Hello world');
};

app.createServer();