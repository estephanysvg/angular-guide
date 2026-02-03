import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { dummyTasks } from './dummy-tasks';
import { type UserModel } from '../user/user.model';
import { type TaskModel } from './task/task.model';
@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input() userSelected?: UserModel;
  tasks: TaskModel[] = dummyTasks;

  get selecterUserTasks(): TaskModel[] {
    return this.tasks.filter((task) => task.userId === this.userSelected?.id);
  }

  onComplete(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
