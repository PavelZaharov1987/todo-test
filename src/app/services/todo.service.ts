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
    {id: 1, title: 'купить хлеб', completed: false},
    {id: 2, title: 'купить масло', completed: true},
    {id: 3, title: 'купить пиво', completed: false},
  ]

  onToggle(id: number) {
    const idx = this.todos.findIndex(todo => todo.id === id);
    this.todos[idx].completed = !this.todos[idx].completed;
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  addTodo(todo: Todo) {
    const newTodos = [
      ...this.todos,
      todo
    ]
    return this.todos = newTodos;
  }
}
