//build the server together with socket io
const express = require("express");
const app = express();
const http = require("http");   // already existed in any nodejs application
const cors = require("cors");
//const {Server} = require("socket.io");

app.use(cors());

const server = http.createServer(app);  // generae the server





server.listen(3001, () => {
    console.log("SERVER RUNNING");
});