import { createServer } from "http";

const PORT = process.env.PORT || 8000;

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Greg Doe" },
  { id: 3, name: "Mario Doe" },
];

// Logger middleware
const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    if (req.url === "/api/users" && req.method === "GET") {
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.end(JSON.stringify(users));
    } else if (
      req.url.match(/\/api\/users\/([0-9]+)/) &&
      req.method === "GET"
    ) {
      const id = req.url.split("/")[3];
      const user = users.find((user) => user.id === parseInt(id));
      if (user) {
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify(user));
      } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("User Not Found");
      }
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
    }
  });
});

server.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
