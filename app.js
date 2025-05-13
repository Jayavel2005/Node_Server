const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, "Successfully executed");
        res.end("Hi, welcome to the Node.js Server Home page");
    } else if (req.url === "/about") {
        res.writeHead(200,"Successfully executed");
        res.end("This is the about page!");
    } else {
        res.writeHead(404, "Path does not exist");
        res.end("404 Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server is successfully running at: http://localhost:3000");
});
