import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksComponent } from './tasks/tasks.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskService } from './task.service';
import {LocalStorageService} from 'angular2-localstorage';
@NgModule({
  declarations: [
    AppComponent,
    NewTaskComponent,
    TasksComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, ReactiveFormsModule
  ],
  providers: [TaskService,LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
