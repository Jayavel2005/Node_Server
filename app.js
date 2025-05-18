// const http = require("http");

// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         res.writeHead(200, "Successfully executed");
//         res.end("Hi, welcome to the Node.js Server Home page");
//     } else if (req.url === "/about") {
//         res.writeHead(200,"Successfully executed");
//         res.end("This is the about page!");
//     } else {
//         res.writeHead(404, "Path does not exist");
//         res.end("404 Not Found");
//     }
// });

// server.listen(3000, () => {
//     console.log("Server is successfully running at: http://localhost:3000");
// });


// const http = require("http");

// const server = http.createServer((req, res)=>{
//     res.setHeader("Content-type", "text/html");
//     res.write(`<script src='/script.js'></script>`);
//     res.end();
// })

// server.listen(3000);


// Routing Urls


const http = require("http");
const form = `<form method="POST" action="/message"><input type="text" name='message'><input type='submit' value='Click Me!'></form>`

const server = http.createServer((req, res) => {
    res.setHeader("Content-type", 'text/html');

    if (req.url === "/") {
        res.write(form);
        return res.end()
    }

    if (req.url === '/message') {
        res.write("Welcome back to the Server!.");
        return res.end();
    }
})


server.listen(3000);