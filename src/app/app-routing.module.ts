import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './pages/tasks/tasks.component';
import {  NewTaskComponent } from './pages/new-task/new-task.component';
import { UpdateTaskComponent } from './pages/update-task/update-task.component';

const routes: Routes = [
  {path: '', redirectTo: '/tasks', pathMatch: 'full'},
  {path: 'tasks', component: TasksComponent},
  {path: 'tasks/new', component: NewTaskComponent},
  {path: 'tasks/:id', component: UpdateTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
