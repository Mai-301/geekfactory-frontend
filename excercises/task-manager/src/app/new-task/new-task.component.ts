import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  task: Task = new Task;
  newTodoForm: FormGroup;
  constructor(private taskService: TaskService, private formBuilder: FormBuilder) {
    this.newTodoForm = this.formBuilder.group({
      category: ['', Validators.required],
      title: ['', Validators.required],
      priority: ['', Validators.required],
      estimate: ['', Validators.required],
    });
  }
  onSubmit() {
    this.task.category = this.newTodoForm.value.category;
    this.task.title = this.newTodoForm.value.title;
    this.task.priority = this.newTodoForm.value.priority;
    this.task.estimate = this.newTodoForm.value.estimate;
    this.taskService.addTask(this.task);
  }

  ngOnInit() {

  }

}
