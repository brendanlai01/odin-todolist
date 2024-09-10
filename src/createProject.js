import  { updateHeader, updateHeaderListeners }  from './addProjectListener.js';

//project list dropdown method (mostly all project sidebar methods)
const expand = document.querySelector('#expand');
let projectsList = document.querySelectorAll('.projects-list li');


function dropdown(){
    projectsList.forEach((li)=>{
        if(isDisplayBlock(li)){
            li.style.display = 'none';
        }else{
            li.style.display = 'block';
        }
    });
}

expand.addEventListener('click', dropdown);

////

function isDisplayNone(element) {
    return window.getComputedStyle(element).display === "none";
}

function isDisplayBlock(element){
    return window.getComputedStyle(element).display === 'block';
}

function addProjectInput(name){
    let projSelect = document.querySelector('#project-select');
    let newProj = document.createElement('option');
    
    newProj.value = `${name}`;
    newProj.textContent = `${name}`;
    projSelect.appendChild(newProj);
}

function createProjectLi(text){
    let firstChild = document.querySelector('.projects-list li');

    let newProject = document.createElement('li');
    newProject.textContent = `${text}`;
    newProject.style.display = 'block';
    let list = document.querySelector('.projects-list');
    list.appendChild(newProject);

    projectsList = document.querySelectorAll('.projects-list li');
    addProjectInput(newProject.textContent);

    if(isDisplayNone(firstChild)){
        newProject.style.display = 'none'
    }
    
    updateHeaderListeners();
    expand.removeEventListener('click', dropdown);
    expand.addEventListener('click', dropdown);
}

export { createProjectLi };