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
  task: Task = null;
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
      category: this.editTodoForm.get('category').value,
      title: this.editTodoForm.get('title').value,
      priority: this.editTodoForm.get('priority').value,
      estimate: this.editTodoForm.get('estimate').value,
      remaining: this.editTodoForm.get('remaining').value,
      spent: this.editTodoForm.get('spent').value
    }
    this.taskService.publishData(task);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
