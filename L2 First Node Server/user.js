const http = require("http");
const fs = require("fs");
const port = 4001;

const requestHandler = (req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Enter your Details:  </h1>');
    res.write('<form action="/submit" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male"/><br>');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female"/><br>');
    res.write('<input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  } else if (req.url.toLowerCase() === "/submit" && req.method === "POST") {
    let body = "";
    
    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      console.log("Form Data:", body);

      // Save the data to a file
      fs.writeFileSync("User.txt", body);

      // Redirect the user back to the home page
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Sazzad Hossen</h1>");
    res.write("<h1>Buy something</h1>");
    res.write("<h1>Something</h1>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    console.error("Error starting server:", err);
  } else {
    console.log(`Server is listening on port ${port}`);
  }
});
