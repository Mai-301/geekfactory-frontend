import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable } from 'rxjs/Rx';
import { LocalStorage, SessionStorage } from 'angular2-localstorage/WebStorage';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class TaskService {
  @LocalStorage('tasks') tasks: Task[];
  private selectedTask = new Subject<Task>();
  task: Task;
  selectedTask$ = this.selectedTask.asObservable();
  publishData(task: Task) {
    this.selectedTask.next(task);
  }
  constructor() {
    this.tasks = [{ category: "assignments", title: "assignment1", priority: 1, estimate: 2, spent: 1, remaining: 2 },
    { category: "assignments", title: "assignment2", priority: 2, estimate: 3, spent: 1, remaining: 3 },
    { category: "projects", title: "project1", priority: 3, estimate: 5, spent: 1, remaining: 5 }];
  }
  addTask(task: Task) {
    console.log(task);
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks
  }
  deleteTask(task: Task): Promise<Task[]> {
    this.tasks.splice(this.tasks.indexOf(task), 1);
    return new Promise((resolve, reject) => {
      console.log(this.tasks);
      resolve(this.tasks);
      reject(this.tasks);
    });
    
  }
  sendTaskDetails(task: Task) {
    this.task = task;
  }
}
