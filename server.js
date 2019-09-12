const express = require("express");
const path = require("path");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const socketEvents = require("./socketEvents");
const PORT = process.env.PORT || 3001;

// attach sockets http listener
io.attach(http);

// attach socketEvents to socket
socketEvents(io);

// define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

// Static directory
app.use(express.static("client/src/imgs"));

// if no route is found
app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});

http.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});