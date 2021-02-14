import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(
    public todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('hi');
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
