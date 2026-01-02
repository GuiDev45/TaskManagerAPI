import http from "http";

const server = http.createServer((_req, res) => {
  res.end("API rodando");
});

server.listen(3000, () => {
  console.log("Server on http://localhost:3000");
});
