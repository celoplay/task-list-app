import { Component } from '@angular/core';
import { ITask } from '../../models/task.model';
import { Task } from "./components/task/task";

@Component({
  selector: 'app-task-list',
  imports: [Task], 
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss'
})
export class TaskList {
[x: string]: any;
    public taskListPending: ITask[] = [];
    public taskListCompleted: ITask[] = [];
    public showInputTask: boolean = false;
    public errorInputTask: boolean = false;

    showInputTextTask(){
      this.showInputTask = true;
    }

    createTask(description:string){

      if (description.trim()) {
              const task:ITask ={
        date:new Date(),
        description:description.trim(),
        completed:false
      }

       this.taskListPending.push(task);
       this.showInputTask = false;
       console.log(this.taskListPending);
        this.errorInputTask= false;
      }else{
        this.errorInputTask= true;
      }

    }
    removeTask(index:number){
      //console.log(index);

    }

    completeTask(index:number){
      //console.log(index);
            const task = this.taskListPending[index];
      task.completed = true;
      task.date = new Date();
      this.taskListPending.splice(index,1);
      this.taskListCompleted.push(task);
    }

}
