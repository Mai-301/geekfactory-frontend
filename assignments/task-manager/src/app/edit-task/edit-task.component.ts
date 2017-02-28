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
  index:number;
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
    this.subscription=this.taskService.selectedTask$.subscribe(
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
    console.log('Form submitted-sibling2Form');
    //  this.editTodoForm = this.formBuilder.group({
    //   category: [this.taskService.loadTask().category, Validators.required],
    //   title: [this.taskService.loadTask().title, Validators.required],
    //   priority: [this.taskService.loadTask().priority, Validators.required],
    //   estimate: [this.taskService.loadTask().estimate, Validators.required],
    //   remaining: [this.taskService.loadTask().remaining, Validators.required],
    //   spent: [this.taskService.loadTask().spent, Validators.required]
    // });
    let task: any = {
      category: this.editTodoForm.get('category').value,
      title: this.editTodoForm.get('title').value,
      priority: this.editTodoForm.get('priority').value,
      estimate: this.editTodoForm.get('estimate').value,
      remaining: this.editTodoForm.get('remaining').value,
      spent: this.editTodoForm.get('spent').value
    }
    // let caseNumber = this.sibling2Form.get('caseNumber').value;
    this.taskService.selectedTask$ = task;
    this.taskService.publishData(task);
  }
   ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
