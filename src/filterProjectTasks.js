import { createTaskNode } from "./createTask.js";
import { myTasks } from "./createTask.js";

function filterProjTasks(project){
    let filteredArr = myTasks.filter((item)=> item.project.toUpperCase() === project.toUpperCase());
    resetDisplay();
    console.log(filteredArr);
    filteredArr.forEach((item)=>{
        createTaskNode(item.title, item.desc, item.date, item.priority);
    })
}

function resetDisplay(){
    let taskList = document.querySelectorAll('.task-container');
    taskList.forEach((item)=>{
        item.remove();
    })
}

export { filterProjTasks, resetDisplay };