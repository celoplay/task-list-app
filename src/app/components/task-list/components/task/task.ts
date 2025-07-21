import { Component, Input } from '@angular/core';
import { ITask } from '../../../../models/task.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  @Input({ required: true }) task!: ITask;
  @Input() index: number = 0;
}
