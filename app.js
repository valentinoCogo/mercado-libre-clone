//

const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.listen(44, () => {
  console.log("andanding");
});

app.get("/home", (req, res) => {
  const root = path.join(__dirname + "/views/home.html");
  res.sendFile(root);
});

app.get("/registro", (req, res) => {
  const root = path.join(__dirname + "/views/registro.html");
  res.sendFile(root);
});

//
//
//
