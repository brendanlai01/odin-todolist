import Task from 'task.js';

export default function createTask(title, description, date, priority, completion, project){
    let newTask = new Task(title, description, date, priority, completion, project);
    let taskHTML = `
    <div class="example bold center-align roboto-regular">
    <div class="task-title zero-margin  center-align">
        <img class="img-width" src="check-circle-outline.svg" alt="">
        <div class="task-desc">
            <h3 class="zero-margin">Example Task</h3>
            <p class="zero-margin">this is an example description for the task</p>
        </div>
    </div>
        <div class="task-date zero-margin center-align">
            <strong>
                ${priority}
            </strong>
            <p>${date}</p>
            <img class="img-width" src="dots-horizontal.svg" alt="">
            <img class="img-width" src="trash-can.svg" alt="">
        </div>
    </div>
    `;


}