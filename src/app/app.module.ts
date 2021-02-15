import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoService } from './services/todo.service';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { FormsModule } from '@angular/forms';
import { TasksComponent } from './pages/tasks/tasks.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { UpdateTaskComponent } from './pages/update-task/update-task.component';
import { TodosDoneComponent } from './components/todos-done/todos-done.component';
import { TodosFormUpdateComponent } from './components/todos-form-update/todos-form-update.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoFormComponent,
    TasksComponent,
    NewTaskComponent,
    UpdateTaskComponent,
    TodosDoneComponent,
    TodosFormUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
