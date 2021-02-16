import {Injectable} from '@angular/core';

export interface Todo {
  id: number,
  title: string,
  completed: boolean,
  isActive?: boolean
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

  public idx: number = 0;
  public isActive: boolean = true;

  onToggle(id: number) {
    const idx = this.todos.findIndex(todo => todo.id === id);
    this.todos[idx].completed = !this.todos[idx].completed;
  }

  onActive(id: number) {
    const idx = this.todos.findIndex(todo => todo.id === id);
    this.todos[idx].isActive = !this.todos[idx].isActive;
  }

  removeTodo(id: number) {
    const idx = this.todos.findIndex(todo => todo.id === id);
      const newArray = [
        ...this.todos.slice(0, idx),
        ...this.todos.slice(idx + 1)
      ]
      return this.todos = newArray;
  }

  addTodo(todo: Todo) {
    const newTodos = [
      ...this.todos,
      todo
    ]
    return this.todos = newTodos;
  }

  saveTodo(id: number, title: string) {
    const idx = this.todos.findIndex(todo => todo.id === id);
    const oldItem = this.todos[idx];
    const newItem = {...oldItem, title: title};
    return this.todos = [
      ...this.todos.slice(0, idx),
      newItem,
      ...this.todos.slice(idx + 1)
    ]
  }

  getId(id: number) {
    this.idx = id
  }

  transferId() {
    return this.idx;
  }

  changeActiveButton(isActive: boolean) {
    this.isActive = isActive;
  }
}
