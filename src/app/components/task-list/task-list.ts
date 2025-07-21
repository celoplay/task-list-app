import { Component } from '@angular/core';
import { ITask } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  imports: [],
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
}
