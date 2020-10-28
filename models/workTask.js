const fs = require("fs")
const path = require("path")
const pathToWorkTaskFile = path.join(path.dirname(process.mainModule.filename), 'data','workTask.json');

//let toDoList = [];

module.exports = class workTask{
    constructor(workTask){
        this.description = workTask;
    }

    saveWorkTask(){
        fs.readFile(pathToWorkTaskFile, (error, fileContent)=>{
            let tasks = []

            if(!error){
                tasks = JSON.parse(fileContent);
            }else{
                console.log(error);
            }
            tasks.push(this)
            fs.writeFile(pathToWorkTaskFile, JSON.stringify(tasks), (error)=>{
                console.log("Error", error);
            });
        });
        //toDoList.push(this);
    }

    static fetchWorkTasks(callBack){
        fs.readFile(pathToWorkTaskFile, (error, fileContent)=>{
            if(error){
                callBack([])
            }
            callBack(JSON.parse(fileContent));
        });
    }
    static deleteItem(description){
        console.log("test from delete");
        fs.readFile(pathToWorkTaskFile, (error, fileContent)=>{
            let tasks = [];
            if(!error){
                tasks = JSON.parse(fileContent);
            }
            for(let i = 0; i < tasks.length; i++){
                if(tasks[i].description === description){
                    console.log(tasks[i].description, " deleted");
                    tasks.splice(i, 1);
                    break;
                }
            }
            fs.writeFile(pathToWorkTaskFile, JSON.stringify(tasks), (error)=>{
                    console.log("Error while trying to delete", error)
                })
        })
    }

}