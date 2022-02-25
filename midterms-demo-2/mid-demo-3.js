// Activity Name: mid-demo-3.js
// Author Name: Villacarlos, Alberto S.
// Section and Code: WD-202/2083

var express = require("express");
var multer = require("multer");
var app = express();

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

var uploads = multer({ storage: storage }).single("myFile");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/file-upload.html");
});

app.post("/uploaded", function (req, res) {
  uploads(req, res, function (err) {
    if (err) {
      return res.end("Error uploading file");
    }
    res.end("File is uploaded successfully!");
  });
});

app.listen(2000, function () {
  console.log("Server is running on port 2000");
});
