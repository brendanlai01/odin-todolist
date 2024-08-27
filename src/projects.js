
export default class Projects{

    constructor(project){
        this.project = [];
    }

    addTask(task){
        this.project.push(task);
        return this.project;
    }

    deleteTask(task, index){
        this.project.splice(index, 1);
        return this.project;
    }

    deleteProject(){
        return this.project.length = 0;
    }
}