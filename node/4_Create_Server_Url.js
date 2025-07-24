const http = require("http");

const server = http.createServer((req, res) => {
  const path = req.url;
  if (path == "/" || path == "overview") {
    res.end("overview");
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
      "my-own-header": "Test",
    });
    res.end("<h1>404 page <h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listning to request on port 8000");
});
