import {Injectable} from '@angular/core';

export interface Todo {
  id: number,
  title: string,
  completed: boolean,
  date?: any
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  public todos: Todo[] = [
    {id: 1, title: 'купить хлеб', completed: false, date: new Date()},
    {id: 2, title: 'купить масло', completed: true, date: new Date()},
    {id: 3, title: 'купить пиво', completed: false, date: new Date()},
  ]

  onToggle(id: number) {
    const idx = this.todos.findIndex(todo => todo.id === id);
    this.todos[idx].completed = !this.todos[idx].completed;
  }
}
