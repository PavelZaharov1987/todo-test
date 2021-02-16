import { Component, OnInit, DoCheck } from '@angular/core';
import { Todo, TodoService } from '../../services/todo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todos-form-update',
  templateUrl: './todos-form-update.component.html',
  styleUrls: ['./todos-form-update.component.scss']
})
export class TodosFormUpdateComponent implements OnInit, DoCheck {

  id: number = 1;
  title: string = '';

  constructor(
    public todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.id = this.todoService.transferId();
  }

  saveTodo() {
    this.todoService.saveTodo(this.id, this.title);
    this.title = '';
  }

  turnBack() {
    this.router.navigateByUrl('tasks');
    this.todoService.changeActiveButton(true);
    this.todoService.onActive(this.id);
  }
}
