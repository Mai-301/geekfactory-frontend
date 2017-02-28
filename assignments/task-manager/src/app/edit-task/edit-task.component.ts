import { Component, OnInit, OnChanges } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit, OnChanges {
  isEmptyTasks: boolean = false;
  editTodoForm: FormGroup;
  private subscription;
  constructor(private taskService: TaskService, private formBuilder: FormBuilder) {
    this.editTodoForm = this.formBuilder.group({
      category: ['', Validators.required],
      title: ['', Validators.required],
      priority: ['', Validators.required],
      estimate: ['', Validators.required],
      remaining: ['', Validators.required],
      spent: ['', Validators.required]
    });
    this.isEmptyTasks = this.taskService.getTasks().length === 0;
    this.subscription = this.taskService.selectedTask$.subscribe(
      data => {
        this.editTodoForm.patchValue({
          category: data.category,
          title: data.title,
          priority: data.priority,
          estimate: data.estimate,
          remaining: data.remaining,
          spent: data.spent
        });
      });
  }

  ngOnInit() {
  }
  ngOnChanges() {

  }
  onSubmit(): void {
    let task: any = {
      category: this.editTodoForm.value.category,
      title: this.editTodoForm.value.title,
      priority: this.editTodoForm.value.priority,
      estimate: this.editTodoForm.value.estimate,
      remaining: this.editTodoForm.value.remaining,
      spent: this.editTodoForm.value.spent
    }
    this.taskService.publishData(task);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
