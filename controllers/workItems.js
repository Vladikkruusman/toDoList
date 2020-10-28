const date = require("../generateDate.js");
const workTask = require("../models/workTask");
let toDoList = [];

exports.getWorkPage = (req, res) => {
    workTask.fetchWorkTasks(items =>{
        let day = date.getDate();
        res.render("work.ejs", {date: day, toDoItems: items});
    });
    /*let weekday = date.getDate();
    const workItemList = WorkTask.fetchWorkTasks();
    /*let weekday = date.getWeekDay();
    console.log(day);
    res.render("work.ejs", {date: weekday, toDoItems: workItemList});*/
};

exports.postNewWorkItem = (req, res) => {
    const workItem = new workTask(req.body.newWork);
    workItem.saveWorkTask();
    /*let newTask = req.body.newTask;
    toDoList.push(newTask);*/
    res.redirect("/work");
};
exports.deleteItem = (req, res) =>{
    console.log("Call from delete",req.body.checkbox);
    workTask.deleteItem(req.body.checkbox);
    res.redirect('/work');
}