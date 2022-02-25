// Activity Name: mid-demo-1.js
// Author Name: Villacarlos, Alberto S.
// Section and Code: WD-202/2083

var express = require("express");
var app = express();

app.use(express.static("public"));
app.get("/index-get.html", function (req, res) {
  res.sendFile(__dirname + "/" + "index-get.html");
});

app.get("/process_get", function (req, res) {
  response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name,
  };

  console.log(response);
  res.end(JSON.stringify(response));
});

var server = app.listen(500, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
