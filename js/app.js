var express = require("express");
var app = express();

app.get("/url", (req, res, next) => {
    res.json(["Mentor 1","Mentor 2","Mentor 3","Mentor 4","Mentor 5", "Mentor 6",]);
   });

app.get("/url", (req, res, next) => {
    res.json(["Mentor","Mentor 2","Mentor 3","Mentor 4","Mentor 5", "Mentor 6",]);
   });

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

