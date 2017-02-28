import { Component, OnInit, OnChanges } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import * as _ from 'lodash';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnChanges {
  tasks: Task[];
  index: number;
  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
    this.taskService.selectedTask$.subscribe(
      data => {
        this.tasks.splice(this.index, 1, data);
      });
  }

  ngOnInit() {
  }
  ngOnChanges() {

  }
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).then((response) => {
      return response;
    }).then((data) => {
      this.tasks = data;
    }).catch((ex) => {
      console.error('Error deleting tasks', ex);
    });
  }
  sendTaskDetails(task: Task) {
    this.index = _.indexOf(this.tasks, _.find(this.tasks, task));
    this.taskService.publishData(task);
  }

}
