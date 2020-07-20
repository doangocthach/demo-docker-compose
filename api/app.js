const express = require("express");
const http = require("http");

const app = express();

app.get("/", (req, res) => res.send("vcl"));
const server = http.createServer(app);
server.listen(3000, () => console.log("Server started!"));
