const date = require("../generateDate.js");
const WorkTask = require("../models/workTask")
let toDoList = [];

exports.getWorkPage = (req, res) => {
    let weekday = date.getDate();
    const workItemList = WorkTask.fetchWorkTasks();
    /*let weekday = date.getWeekDay();
    console.log(day);*/
    res.render("work.ejs", {date: weekday, toDoItems: workItemList});
};

exports.postNewWorkItem = (req, res) => {
    const workItem = new WorkTask(req.body.newWorkTask);
    workItem.saveWorkTask();
    /*let newTask = req.body.newTask;
    toDoList.push(newTask);*/
    res.redirect("/work");
};