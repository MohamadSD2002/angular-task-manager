import { Component, input } from '@angular/core';

interface Task {
  id: number;
  title: string;
}


@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {
  task = input<Task>();
}