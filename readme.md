# Node.js Beginner Guide

## What is Node.js?

Node.js is an open-source, cross-platform JavaScript runtime environment. It allows you to run JavaScript code outside of a web browser, typically on the server side.

## Why Use Node.js?

- **Fast and Efficient:** Built on Chrome's V8 JavaScript engine.
- **Non-blocking I/O:** Handles many connections at once.
- **JavaScript Everywhere:** Use the same language for both client and server.

## Installing Node.js

1. Go to [nodejs.org](https://nodejs.org/)
2. Download the LTS version for your operating system.
3. Follow the installation instructions.

Check installation:

```bash
node -v
npm -v
```

## Your First Node.js Program

Create a file named `app.js`:

```js
console.log('Hello, Node.js!');
```

Run it:

```bash
node app.js
```

## Using npm (Node Package Manager)

- Install packages:  
    `npm install <package-name>`
- Example:  
    `npm install express`

## Creating a Simple Web Server

```js
const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello, World!');
    res.end();
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
```

## Resources

- [Node.js Official Docs](https://nodejs.org/en/docs/)
- [NodeSchool](https://nodeschool.io/)
- [MDN Node.js Guide](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework)

---
Happy coding!