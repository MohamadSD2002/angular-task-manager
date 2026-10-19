import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskItem } from './task-item/task-item';

interface Task {
  id: number;
  title: string;
}

@Component({
  selector: 'app-tasks',
  imports: [FormsModule, TaskItem],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  newTaskTitle = '';

  tasks = signal([
    { id: 1, title: 'Learn Angular' },
    { id: 2, title: 'Build a project' },
    { id: 3, title: 'Practice TypeScript' }
  ])

  selectTask(task: Task) {
    console.log(this.tasks())
  }

  addTask() {
    if(!this.newTaskTitle.trim()) {
      return
    }

    this.tasks.update(tasks => [
      ...tasks,
      {
        id: tasks.length + 1,
        title: this.newTaskTitle,
      }
    ])

    this.newTaskTitle = '';
  }
}
