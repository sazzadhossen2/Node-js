

const http = require("http");
const port = 4000;
const requestHandler = (req, res) => {

  console.log(req.url,req.method, req.headers);

  if(req.url === '/'){
  res.setHeader('context-type','text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Sazzad Hossen </h1></body>');
  res.write('<body><h1>Daffodial International University</h1></body>');
  res.write('<body><h1>Computer  </h1></body>');
  res.write('</html>');
  return res.end();
  }else if (req.url === '/products'){
    
    res.setHeader('context-type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Sazzad Hossen </h1></body>');
    res.write('<body><h1>Buy Product</h1></body>');
    res.write('<body><h1>Buy  </h1></body>');
    res.write('</html>');
  return res.end();
  }else{
    res.setHeader('context-type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Sazzad Hossen </h1></body>');
    res.write('<body><h1>Buy something</h1></body>');
    res.write('<body><h1>something  </h1></body>');
    res.write('</html>');
  res.end();   
  }

  


};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {

  console.log(`server is listening on ${port}`);

})