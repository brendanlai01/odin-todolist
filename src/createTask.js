import Task from './tasks.js';
import { format } from 'date-fns';
import check_circle from './icons/check-circle-outline.svg';
import dots from './icons/dots-horizontal.svg';
import trash from './icons/trash-can.svg';

let myTasks = [];

function takeUserInput(){
    let newTitle = document.querySelector('#title').value;
    let newDesc = document.querySelector('#description').value;
    let newProject = document.querySelector('#project-select').value;
    let newDate = format(new Date(document.querySelector('#date').value), "MM/dd/yyyy");
    let newPrio = document.querySelector('#priority').value

    if(checkEmptyDate(newDate) === false && checkEmptyTitle(newTitle) === false){
        console.log(myTasks);
        createTask(newTitle, newDesc, newDate, newPrio, 'Not Done', newProject);
    }else return;
}

function createTask(title, desc, date, prio, comp, proj){
    const createdTask = new Task(title, desc, date, prio, comp, proj);
    myTasks.push(createdTask);
    let i = myTasks.indexOf(createdTask);
    let taskNode = createTaskNode(createdTask.title, createdTask.desc, createdTask.date, createdTask.priority, createdTask.project);
    taskNode.dataset.index = i;
    localStorage.setItem("createdTask", JSON.stringify(createdTask.title));
    return taskNode;
}

function createTaskNode(title, desc, date, prio){
    let main = document.querySelector('main');
    let top = document.createElement('div');
    let taskTitle = document.createElement('div'); //holds title and desc
    let taskDate = document.createElement('div'); //holds prio date and btns
    top.classList.add('task-container', 'bold', 'center-align', 'roboto-regular');
    taskTitle.classList.add('task-title', 'zero-margin', 'center-align');
    taskDate.classList.add('task-date', 'zero-margin', 'center-align');
    top.append(taskTitle, taskDate);
    main.appendChild(top);

    let checkCircle = document.createElement('img');
    checkCircle.classList.add('check', 'img-width');
    checkCircle.src = check_circle;
    
    let taskDescriptor = document.createElement('div');
    taskDescriptor.classList.add('task-desc');
    let taskName = document.createElement('h3');
    taskName.textContent = `${title}`;
    taskName.classList.add('zero-margin');
    let taskDesc = document.createElement('p');
    taskDesc.textContent = `${desc}`;
    taskDesc.classList.add('zero-margin');

    taskDescriptor.append(taskName, taskDesc);

    taskTitle.append(checkCircle, taskDescriptor);

    let priorityText = document.createElement('strong');
    priorityText.textContent = `${prio}`;
    let dateText = document.createElement('p');
    dateText.textContent = `${date}`;
    let editBtn = document.createElement('img');
    editBtn.src = dots;
    editBtn.classList.add('edit', 'img-width');
    let trashBtn = document.createElement('img');
    trashBtn.src = trash;
    trashBtn.classList.add('trash', 'img-width');

    trashBtn.addEventListener('click', ()=>{
        let index = top.dataset.index;
        trashBtn.parentElement.parentElement.remove();
        myTasks.splice(index, 1);
        updateDataIndex();
        console.log(myTasks);
    });
    
    checkCircle.addEventListener('click', ()=>{
        myTasks[top.dataset.index].switchCompletion();
        console.log(myTasks[top.dataset.index]);
    })

    taskDate.append(priorityText, dateText, editBtn, trashBtn);
    return top;
}

function displayTasks(array){
    array.forEach((task) => {
        let i = myTasks.indexOf(task);
        let taskNode = createTaskNode(task.title, task.desc, task.date, task.priority);
        taskNode.dataset.index = i;
    });
}

function updateDataIndex(){
    let list = document.querySelectorAll('main .task-container');
    for(let i = 0; i < myTasks.length; i++){
        list[i].dataset.index = i;
    }
}

function createTests(){
    createTask('Mooyah #0', 'This is the func call for createTask / 0th element', '8/25/2024', 'Med', 'Not Done', 'Inbox');
    createTask('Mooyah #1', 'This is the func call for createTask / 1ST element',  '9/10/2024', 'Med', 'Not Done', 'Example 2');
    createTask('Mooyah #2', 'This is the func call for createTask / 2ND element', '10/21/2021', 'Med', 'Not Done', 'Mooyah');
    createTask('Mooyah #3', 'This is the func call for createTask / 3RD element', '4/19/2023', 'Low', 'Not Done', 'Inbox');
    createTask('Mooyah #4', 'This is the func call for createTask / 3RD element', '7/01/2026', 'High', 'Not Done', 'Inbox');
}

function checkEmptyDate(date){
    if(date === null || date === '') return true;
    else return false;
}

function checkEmptyTitle(title){
    if(title === '') return true;
    else return false;
}

export { takeUserInput, updateDataIndex, createTaskNode, createTests, myTasks };function overwriteMyTasks(){
    localStorage.setItem('myTasks', JSON.stringify(myTasks));
}

