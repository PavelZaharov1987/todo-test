import { Component, OnInit, DoCheck } from '@angular/core';
import { Todo, TodoService } from '../../services/todo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, DoCheck {

  public todos: Todo[] = [];
  public todosDone: Todo[] = [];

  constructor(
    public todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.todos = this.todoService.todos.filter(todo => todo.completed === false);
    this.todosDone = this.todoService.todos.filter(todo => todo.completed === true);
  }

  onChange(id: number) {
    this.todoService.onToggle(id);
  }

  removeTodo(id: number) {
    this.todoService.removeTodo(id);
  }

  addTodo() {
    this.router.navigateByUrl('tasks/new');
  }
}
