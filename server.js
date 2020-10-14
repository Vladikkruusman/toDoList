const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const date = require(__dirname+"/generateDate.js");

const app = express();
app.set("view engine", ejs);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let toDoList = [];

app.get("/", (req, res) => {
    let day = date.getDate();
    let weekday = date.getWeekDay();
    console.log(day);
    res.render("index.ejs", {date: weekday, toDoItems: toDoList});
});

app.post("/", (req, res) =>{
    let newTask = req.body.newTask;
    toDoList.push(newTask);
    res.redirect("/");
});

app.get("/about", (req, res) =>{
    res.render("about.ejs");
});

app.post("/about", (req, res) =>{
    res.redirect("/about");
});


app.listen(5000, ()=> {
    console.log("Server is running on post 5000");
})