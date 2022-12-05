const express = require("express");
const mysql = require("mysql");

const app = express();

app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "$3ll3naG0m3z",
    database: "LoginSystem",
});

db.connect(function(err){
    if(err)
    {
        console.log(err)
    } else {
        console.log("connected")
    }
});

app.listen(3001, () => {
    console.log("running server");
});