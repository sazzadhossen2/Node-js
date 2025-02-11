

// const http = require('http'); // Corrected 'require'

// const server = http.createServer((req, res) => {
//   console.log(req);
//   res.end('Hello, World!'); // Send a response to avoid hanging requests
// });

// server.listen(3000);

// // const PORT = 3000;

// // server.listen(PORT, () => {
// //   console.log(`Server Running at http://localhost:${PORT}`);
// // });







const http = require("http");

const port = 3000;

const requestHandler = (req, res) => {

  console.log(req.url,req.method, req.headers);
  // console.log(req.url);
  // res.end("Hello Node.js Server!");
  // process.exit();

};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {

  console.log(`server is listening on ${port}`);

})