const fs = require('fs'); // Correct require syntax

console.log("Hello, Node.js!");

fs.writeFile("output.txt", "writing File", (err) => {
  if (err) {
    console.error("Error occurred:", err); // Print error if it happens
  } else {
    console.log("File written Successfully");
  }
});