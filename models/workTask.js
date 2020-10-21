let toDoList = [];

module.exports = class WorkTask{
    constructor(workTask){
        this.description = workTask;
    }

    saveWorkTask(){
        toDoList.push(this);
    }

    static fetchWorkTasks(){
        return toDoList;
    }

}