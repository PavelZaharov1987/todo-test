import { Component, OnInit, DoCheck } from '@angular/core';
import { Todo, TodoService } from '../../services/todo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todos-done',
  templateUrl: './todos-done.component.html',
  styleUrls: ['./todos-done.component.scss']
})
export class TodosDoneComponent implements OnInit, DoCheck {

  public todosDone: Todo[] = [];

  constructor(
    public todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.todosDone = this.todoService.todos.filter(todo => todo.completed === true);
  }

  onChange(id: number) {
    this.todoService.onToggle(id);
  }

  removeTodo(id: number) {
    this.todoService.removeTodo(id);
  }
}
