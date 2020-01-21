var express = require("express");
var app = express();
var http = require('http');
var request = require('request');


app.get("/api/doctors/", (req, res, next) => {
request('http://boo:9092/api/doctors/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) // Print the google web page.
        res.send(body)
     }
})

});


app.get("/api/profiles", (req, res, next) => {
request('http://boo:9092/api/getUsers/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) // Print the google web page.
	res.send(body)
     }
})

});

app.get("/healths", (req, res, next) => {
  res.json(["Healthy"]);
});

app.listen(9091, () => {
 console.log("Server running on port 9091");
});


