
class Task{

    constructor(title, dueDate, priority, completion, project){
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completion = completion;
        this.project = project;
    }

    switchCompletion(){
        if(this.completion === 'Not Done'){
            this.completion = 'Done';
        }else{
            this.completion = 'Not Done';
        }
    }

}