// Activity Name: firstapp.js
// Author Name: Villacarlos, Alberto S.
// Section and Code: WD-202/2083

const express = require("Express");
const app = express();

app.get("/", function (request, response) {
  response.send("Hello World! Alberto");
});

app.listen(3000, function () {
  console.log("Server running at http://localhost:3000");
});
