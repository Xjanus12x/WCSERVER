// Activity Name: server-static.js
// Author Name: Villacarlos, Alberto S.
// Section and Code: WD-202/2083

const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", function (request, response) {
  response.send("You have successfully created your second app!");
});

app.get("*", function (request, response) {
  response.send("ERROR 404 Not Found");
});

const server = app.listen(2001, "localhost", function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
