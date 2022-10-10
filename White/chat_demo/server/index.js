//build the server together with socket io
const express = require("express");
const app = express();
const http = require("http");   // already existed in any nodejs application
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);  // generae the server

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
    });
});




server.listen(3001, () => {
    console.log("SERVER RUNNING");
});