const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
require("./models/db");
const mainPage = require("./routes/main");
const workPage = require("./routes/work");
const getError = require("./routes/404");


const app = express();
app.set("view engine", ejs);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//app.get("/about", (req, res) =>{
//    res.render("about.ejs");
//});

app.use(mainPage);
app.use(workPage);
app.use(getError); //Если не находит вышезапросанные пути,то выдаёт путь к ошибке 404

app.listen(5000, ()=> {
    console.log("Server is running on post 5000");
})