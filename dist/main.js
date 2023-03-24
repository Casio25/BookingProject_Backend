"use strict";

var _variables = require("./variables.js");
var http = require("http");
var fs = require("fs");
fs.writeFileSync("data.txt", JSON.stringify(_variables.offers));

/*All fucntion and constants*/

http.createServer(function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control_Methods", "GET, POST, UPDATE");
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  var url = req.url;
  var body = "";
  if (req.method === "POST") {
    if (url === "/data") {
      console.log("booking post");
      req.on("data", function (data) {
        body += data.toString();
      });
      req.on("end", function () {
        var newData = JSON.parse(body);
        var dataUpdate = JSON.parse(fs.readFileSync("data.txt"));
        dataUpdate.push(newData);
        fs.writeFileSync("data.txt", JSON.stringify(dataUpdate));
      });
      res.write(JSON.stringify(fs.readFileSync("data.txt")));
      res.end("POST check");
    }
  } else if (req.method === "GET") {
    if (url === "/data") {
      var _photoData = fs.readFileSync("data.txt", "utf-8");
      res.end(_photoData);
    } else if (photoData.status !== 200) {
      res.end("Cannot find photos");
    }
  }
}).listen(3000);