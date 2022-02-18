// Activity Name: server.js - ROUTING
// Author Name: Villacarlos, Alberto S.
// Section and Code: WD-202/2083

const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", function (request, response) {
  console.log("Accessing Home page.");
  response.send("<h1>Welcome, This is the Home page.</h1>");
});
app.get("/About-me", function (request, response) {
  console.log("Accessing about-me page");
  response.send("<h1>Welcome to my abut me page.</h1>");
});
const server = app.listen(2002, "localhost", function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
