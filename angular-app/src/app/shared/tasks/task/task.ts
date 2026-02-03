import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type TaskModel } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input() task!: TaskModel;
  @Output() complete = new EventEmitter<string>();

  onComplete(id: string) {
    this.complete.emit(id);
  }
}
