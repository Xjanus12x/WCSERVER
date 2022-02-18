// Activity Name: server.js - ROUTING
// Author Name: Villacarlos, Alberto S.
// Section and Code: WD-202/2083

const express = require("express");
const res = require("express/lib/response");
const app = express();

app.get("/", function (request, response) {
  console.log("There is GET request for the homepage!");
  response.send("Here is the GET Method");
});

app.post("/", function (request, response) {
  console.log("A POST request for the homepage is accessed.");
  response.send("Here is the POST Method");
});

app.get("/list_user", function (request, response) {
  console.log("Got a GET request for /list_user");
  response.send("This is Page Listing");
});

app.get("/ab*cd", function (request, response) {
  console.log("Got A GET request for /ab*cd");
  response.send("Pattern Match Page");
});

const server = app.listen(4000, "localhost", function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
