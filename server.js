import http from "http";
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  // res.setHeader('Content-Type', 'text/plain');
  // res.statusCode = 404;
  console.log("req.url:", req.url);
  console.log("req.method:", req.method);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello Mars</h1>");
});

app.post('/user', () => {}) // this only runs when there is a post erquest to the user. this is express

server.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
