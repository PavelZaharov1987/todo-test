import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../../services/todo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  title: string = '';

  constructor(
    public todoService: TodoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  addTodo() {
    const todo: Todo = {
      id: Date.now(),
      title: this.title,
      completed: false,
      date: new Date()
    }

    this.todoService.addTodo(todo);
    this.title = '';
  }

  turnBack() {
    this.router.navigateByUrl('tasks');
  }
}
