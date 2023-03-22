import { offers } from "./variables.js";
const fs = require("fs");
const http = require("http");
fs.writeFileSync("data.txt", JSON.stringify(offers));

http.createServer((req, res) =>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control_Methods", "GET, POST, UPDATE");
    res.writeHead(200, {"Content-Type": "application/json"});

    const url = req.url;
    let body = "";

    if(req.method === "POST"){
        if(url === "/data"){
            console.log("booking post");
            req.on("data", (data) =>{
                body += data.toString();
            });
            req.on("end", () => {
                const newData = JSON.parse(body);
                const dataUpdate = JSON.parse(fs.readFileSync("data.txt"));
                dataUpdate.push(newData)
                fs.writeFileSync("data.txt", JSON.stringify(dataUpdate));
            });
            res.write(JSON.stringify(fs.readFileSync("data.txt")));
            res.end("POST check");
        }
    } else if (req.method === "GET") {
        if (url === "/data") {
            const photoData = fs.readFileSync("data.txt", "utf-8");
            res.end(photoData);
        } else if (photoData.status !== 200) {
            res.end("Cannot find photos")
        }
    }
}).listen(3000);