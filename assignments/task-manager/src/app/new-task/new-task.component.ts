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
    let task: any = {
      category: this.newTodoForm.value.category,
      title: this.newTodoForm.value.title,
      priority: this.newTodoForm.value.priority,
      estimate: this.newTodoForm.value.estimate
    }
    this.taskService.addTask(task);
  }

  ngOnInit() {

  }

}
