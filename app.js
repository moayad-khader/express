const express = require("express");
const router = require("express").Router();
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();

//get, post, put, delete  




app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
);
app.use(router);
  

router.get("/", (req,res) => {
    res.send("hello there!");
});

router.get("/welcome", (req,res) => {
    res.send("welcome");
});

router.post("/api/note",(req,res) => {
    console.log(req.body)
    const data = {...req.body};
    const notes = JSON.parse(fs.readFileSync("./notes.json"));
    notes.push(data);
    fs.writeFileSync("./notes.json",JSON.stringify(notes));
    res.send({ message: "recived successfully"});
});



app.listen(8000,() =>{
    console.log("the server is running.")
})