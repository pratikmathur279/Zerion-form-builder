/*
var http = require('http');
var fs = require('fs');

const PORT = 8080;
*/

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static("./"));

app.get("/", function (req, res) {
    res.sendFile("./index.html"); //index.html file of your angularjs application
});

app.listen(port, function () {
    console.log("Express server listening on port " + port);
});

/*
fs.readFile('./index.html', function (err, html) {
    console.log("html");

    if (err) throw err;
    console.log("after err");
    http.createServer(function (request, response) {
        response.writeHeader(200, {
            "Content-Type": "text/html"
        });
        response.write(html);
        response.end();

    }).listen(PORT);
});
*/
